import React from "react";
import "./TodoList.css";
import Completed from "../completed/Completed";
import Editing from "../editing/Editing";
import Toggle from "../toggle/Toggle";
import IconEdit from "../icon-edit/IconEdit";
import IconDestroy from "../icon-destroy/IconDestroy";

function TodoList() {
  return (
    <ul className="todo-list">
      <Completed />
      <Editing />
      <li>
        <div className="view">
          <Toggle />
          <label>
            <span className="description">Active task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <IconEdit/>
          <IconDestroy/>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
