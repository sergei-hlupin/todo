import React from "react";
import "./TodoList.css";
import Todo from "../todo/Todo";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((item) => {
        return <Todo todo={item} key = {item.id} />;
      })}
    </ul>
  );
}

export default TodoList;
