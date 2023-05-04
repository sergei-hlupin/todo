import React from "react";
import "./TodoApp.css";
import Header from "../header/Header";
import Main from "../main/Main";

function TodoApp() {
  return (
    <section className="todoapp">
      <Header />
      <Main />
    </section>
  );
}

export default TodoApp;
