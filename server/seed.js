const { Pool } = require("pg");

const todos = [
  { title: "Todo 1", completed: false, id: 1 },
  { title: "Todo 2", completed: true, id: 2 },
  { title: "Todo 3", completed: false, id: 3 },
];

async function seedTodos() {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "loganbready",
  });

  try {
    const client = await pool.connect();
    await client.query("BEGIN");

    await Promise.all(
      todos.map(async (todo) => {
        const queryText =
          "INSERT INTO todo (title, completed, id) VALUES ($1, $2, $3)";
        const queryValues = [todo.title, todo.completed, todo.id];
        await client.query(queryText, queryValues);
      })
    );

    await client.query("COMMIT");
    console.log("Todos seeded successfully!");
  } catch (error) {
    console.error("Error seeding todos:", error);
  } finally {
    pool.end();
  }
}

seedTodos();
