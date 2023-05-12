import React from "react";
import "./Todo.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default class Todo extends React.Component {
  state = {
    done: false,
  };
  onTitleClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
  render() {
    const { done } = this.state;
    let classNamesSpan = "";
    let classNamesLi = "";
    if (done) {
      classNamesSpan += " description";
      classNamesLi += " completed";
    }
    let todoDate = formatDistanceToNow(new Date(2023, 4, 5));
    return (
      <li className={classNamesLi}>
        <div className="view">
          <input onChange={this.onTitleClick} className="toggle" type="checkbox" />
          <label>
            <span className={classNamesSpan}>{this.props.todo.title}</span>
            <span className="created">created {todoDate} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={this.props.onDeleted} className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}
