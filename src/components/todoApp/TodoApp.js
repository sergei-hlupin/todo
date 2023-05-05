import React from "react";
import "./TodoApp.css";
import TodoList from "../todoList/TodoList";
import NewTodo from "../newTodo/NewTodo";
import Footer from "../footer/Footer";

function TodoApp() {
  const todos = [
    { id: 1, completed: false, title: "купить молоко" },
    { id: 2, completed: false, title: "купить хлеб" },
    { id: 3, completed: false, title: "купить сахар" },
  ];
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTodo />
      </header>
      <section className="main">
        <TodoList todos={todos} />
        <Footer />
      </section>
    </section>
  );
}

export default TodoApp;
