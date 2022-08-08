import React, { Fragment } from "react";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Fragment>
      <ToDoList />
      <Footer />
    </Fragment>
  );
}
