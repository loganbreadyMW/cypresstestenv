const { Pool } = require("pg");

async function clearTodoTable() {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "loganbready",
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
