import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Input() {
  const [task, setTask] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const body = { task };
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          className="input"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>
          {" "}
          <BsFillPlusCircleFill />
        </button>
      </form>
    </div>
  );
}
