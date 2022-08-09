const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

//Routes for CRUD Operations

//CREATE Operation is a post operation
app.post("/todos", async (req, res) => {
  try {
    const { task } = req.body;
    // console.log(task)
    const newTask = await pool.query(
      "INSERT INTO todo (task) VALUES($1) RETURNING *",
      [task]
    );
    // console.log(newTask.rows[0])
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//GET
app.get("/todos", async (req, res) => {
  try {
    const allToDos = await pool.query("SELECT * FROM todo");
    res.json(allToDos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//GET a single todo list with id from the database
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ToDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    // console.log(ToDo)
    res.json(ToDo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//UPDATE
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    console.log(id, task)

    const updateToDo = await pool.query(
      "UPDATE todo SET task = $1 WHERE todo_id = $2",
      [task, id]
    );
    res.json("Updated");
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Item deleted from the list");
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
