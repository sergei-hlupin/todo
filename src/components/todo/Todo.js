import React from "react";
import "./Todo.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Todo({ todo }) {
  let todoDate = formatDistanceToNow(new Date(2023, 4, 5));
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{todo.title}</span>
          <span className="created">created {todoDate} minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

export default Todo;
