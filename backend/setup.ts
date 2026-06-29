import { pool } from "./db";

async function setup() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS agent_cache (
        agent_id    TEXT NOT NULL,
        payload     JSONB NOT NULL,
        fetched_at  TIMESTAMPTZ DEFAULT NOW(),
        ttl_seconds INTEGER NOT NULL,
        PRIMARY KEY (agent_id)
      );

      CREATE TABLE IF NOT EXISTS seen_jobs (
        job_id       TEXT PRIMARY KEY,
        title        TEXT NOT NULL,
        company      TEXT NOT NULL,
        url          TEXT NOT NULL,
        first_seen   TIMESTAMPTZ DEFAULT NOW(),
        last_seen    TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS conflicts (
        id               SERIAL PRIMARY KEY,
        type             TEXT NOT NULL,
        description      TEXT NOT NULL,
        involved_sources JSONB,
        resolved         BOOLEAN DEFAULT FALSE,
        created_at       TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS user_config (
        key        TEXT PRIMARY KEY,
        value      JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    console.log("Tables created successfully");
  } finally {
    client.release();
  }

  await pool.end();
}

setup().catch(console.error);
