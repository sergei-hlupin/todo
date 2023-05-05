import React from "react";
import "./todoFilter.css";

function TodoFilter() {
    return (
        <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    )
}

export default TodoFilter;
