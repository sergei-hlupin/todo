import React from "react";
import "./Main.css";
import TodoList from "../todoList/TodoList";
import Footer from "../footer/Footer";

function Main() {
  return (
    <section className="main">
      <TodoList />
      <Footer/>
    </section>
  );
}

export default Main;
