const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const client = require("./database");
const app = express();
const port = 3001;
client.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.get("/todos", (req, res) => {
  client.query("SELECT * FROM todo", (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result.rows);
    }
  });
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  const id = Math.floor(Math.random() * 100000000) + 1;
  const completed = false;

  client.query(
    "INSERT INTO todo (id, title, completed) VALUES ($1, $2, $3) RETURNING *",
    [id, title, completed],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.json(result.rows[0]);
      }
    }
  );
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  client.query(
    "UPDATE todo SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
    [title, completed, id],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.json(result.rows[0]);
      }
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  client.query("DELETE FROM todo WHERE id = $1 RETURNING *", [id], (err) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
