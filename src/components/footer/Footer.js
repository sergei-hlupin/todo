import React from "react";
import TodoFilter from "../todoFilter/todoFilter";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TodoFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
