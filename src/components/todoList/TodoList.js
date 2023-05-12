import React from "react";
import "./TodoList.css";
import Todo from "../todo/Todo";

function TodoList({todos, onDeleted}) {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        return <Todo todo={item} key={item.id} onDeleted={() => onDeleted(item.id)} />;
      })}
    </ul>
  );
}

export default TodoList;
