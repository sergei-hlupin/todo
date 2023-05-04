import React from "react";
import "./Editing.css";
import Toggle from "../toggle/Toggle";
import IconEdit from "../icon-edit/IconEdit";
import IconDestroy from "../icon-destroy/IconDestroy";

function Editing() {
  return (
    <li className="editing">
      <div className="view">
        <Toggle />
        <label>
          <span className="description">Editing task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <IconEdit />
        <IconDestroy />
      </div>
      <input type="text" className="edit" />
    </li>
  );
}

//value="Editing task"

export default Editing;
