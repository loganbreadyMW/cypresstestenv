const { Pool } = require("pg");

async function clearTodoTable() {
  const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: 5432,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  try {
    const client = await pool.connect();
    await client.query("DELETE FROM todo");
    console.log("Todo table cleared successfully!");
  } catch (error) {
    console.error("Error clearing todo table:", error);
  } finally {
    pool.end();
  }
}

clearTodoTable();
