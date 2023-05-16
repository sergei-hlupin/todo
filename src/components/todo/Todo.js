import React from "react";
import "./Todo.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default class Todo extends React.Component {
  render() {
    const { onDeleted, onToggleDone, title, completed } = this.props;
    let classNamesSpan = "";
    let classNamesLi = "";
    if (completed) {
      classNamesSpan += " description";
      classNamesLi += "completed";
    }
    let todoDate = formatDistanceToNow(new Date(2023, 4, 5));
    return (
      <li className={classNamesLi}>
        <div className="view">
          <input onChange={onToggleDone} className="toggle" type="checkbox" checked={completed} />
          <label>
            <span className={classNamesSpan}>{title}</span>
            <span className="created">created {todoDate} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}
