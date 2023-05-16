import React from "react";
import TodoFilter from "../todoFilter/todoFilter";
import "./Footer.css";

function Footer({ counter, onCompleted, clearCompleted, onActive, onAll }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TodoFilter onCompleted={onCompleted} onActive={onActive} onAll={onAll} />
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
