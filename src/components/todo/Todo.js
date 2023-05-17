import React, { Component } from "react";
import "./Todo.css";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default class Todo extends Component {
  static propTypes = {
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    onToggleDone: () => {},
    onDeleted: () => {},
  };
  render() {
    let { onDeleted, onToggleDone, title, completed, currentDate, date } = this.props;
    let classNamesSpan = "";
    let classNamesLi = "";
    if (completed) {
      classNamesSpan += " description";
      classNamesLi += "completed";
    }
    let todoDate = formatDistanceToNow(date, currentDate, { includeSeconds: true });
    return (
      <li className={classNamesLi}>
        <div className="view">
          <input onChange={onToggleDone} className="toggle" type="checkbox" checked={completed} />
          <label>
            <span onClick={onToggleDone} className={classNamesSpan}>
              {title}
            </span>
            <span className="created">created {todoDate} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}
