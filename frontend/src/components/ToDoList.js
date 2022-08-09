import React, { useEffect, useState } from "react";
import Input from "./Input";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ToDoList() {
  //storing items retrived from backend to state
  const [tasks, setTasks] = useState([]);

  //get all the tasks from the backend
  const getAllTheTasks = async () => {
    try {
      const allTheTasks = await fetch("/todos");
      const jsonData = await allTheTasks.json();
      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //using effect to make sure it's loaded only once when starting
  useEffect(() => {
    getAllTheTasks();
  }, []);

  //delete items
  const deleteToDo = async (id) => {
    try {
      console.log(id);
      const deleteList = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => {
          return task.todo_id !== id;
        });
      });
      console.log(deleteList);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="title">To Do List</h2>
      <Input />
      {tasks.map((item) => {
        return (
          <div key={item.todo_id} className="list">
            <li>{item.task}</li>
            <button onClick={() => deleteToDo(item.todo_id)} className="btn"> <AiFillCloseCircle className="icon" /></button>
          </div>
        );
      })}
    </div>
  );
}
