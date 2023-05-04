import React from "react";
import "./Header.css";
import NewTodo from "../newTodo/NewTodo";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTodo />
    </header>
  );
}

export default Header;
