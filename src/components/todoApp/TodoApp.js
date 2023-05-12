import React, { Component } from "react";
import "./TodoApp.css";
import TodoList from "../todoList/TodoList";
import NewTodo from "../newTodo/NewTodo";
import Footer from "../footer/Footer";

export default class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, completed: false, title: "купить молоко" },
      { id: 2, completed: false, title: "купить хлеб" },
      { id: 3, completed: false, title: "купить сахар" },
    ],
  };
  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
      return {
        todos: newArr,
      };
    });
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTodo />
        </header>
        <section className="main">
          <TodoList todos={this.state.todos} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
