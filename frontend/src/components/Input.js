import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Input() {
  const [task, setTask] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const body = { task };

      //proxy - is used for only development
      //so if there is there is no localhost, by default it will use heroku domain
      //heroku app is just serving our static file and database
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //this helps to reload the page after adding
      // window.location = "/";

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
          className="input-form"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Add your to do list for today"
        />
        <button className="btn">
          {" "}
          <BsFillPlusCircleFill className="btn-icon" />
        </button>
      </form>
    </div>
  );
}
