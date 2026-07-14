import { runCalendarAgent } from '../../backend/agents/calendarAgent'
import { pool } from '../../backend/db'

async function main() {
  const data = await runCalendarAgent()
  console.log('Calendar data:', JSON.stringify(data, null, 2))
  await pool.end()
}

main().catch(console.error)