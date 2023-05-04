import React from "react";
import "./Completed.css";
import Toggle from "../toggle/Toggle";
import IconEdit from "../icon-edit/IconEdit";
import IconDestroy from "../icon-destroy/IconDestroy";

function Completed() {
  return (
    <li className="completed">
      <div className="view">
        <Toggle/>
        <label>
          <span className="description">Completed task</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <IconEdit/>
        <IconDestroy/>
      </div>
    </li>
  );
}

export default Completed;
