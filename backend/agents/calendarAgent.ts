import Anthropic from '@anthropic-ai/sdk'
import { pool } from '../db'

const client = new Anthropic()

export async function runCalendarAgent() {
    const cached = await pool.query(
        `SELECT payload, fetched_at, ttl_seconds FROM agent_cache
        WHERE agent_id = 'calendar'
        AND fetched_at + (ttl_seconds || ' seconds')::interval > NOW()`
    )

    if (cached.rows.length > 0) {
        console.log('Calendar: using cached data')
        return cached.rows[0].payload
    }

    const response = await client.beta.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        betas: ['mcp-client-2025-11-20'],
        mcp_servers: [
            {
                type: 'url',
                url: 'https://calendarmcp.googleapis.com/mcp/v1',
                name: 'google-calendar'
            }
        ],
        tools: [
            { type: 'mcp_toolset', mcp_server_name: 'google-calendar' }
        ],
        messages: [
            {
                role: 'user',
                content: `Fetch my Google Calendar events for today and the next 7 days.
                Return ONLY a JSON object with this shape, no other text:
                {
                    "today": [{"title": string, "start": string, "end": string, "allDay": boolean }],
                    "week": [{"title": string, "start": string, "date": string}]
                }`
            }
        ]
    } as any)

    const text = response.content
        .filter ((b: any) => b.type === 'text')
        .map((b: any) => b.text)
        .join('')
    
    const payload = JSON.parse(text.replace(/```json|```/g, '').trim())

    await pool.query(
        `INSERT INTO agent_cache (agent_id, payload, ttl_seconds)
        VALUES ($1, $2, $3)
        ON CONFLICT (agent_id) DO UPDATE
        SET payload = $2, fetched_at = NOW()`,
        ['calendar', JSON.stringify(payload), 1800]
    )
    
    return payload
}