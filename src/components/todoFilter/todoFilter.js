import React from "react";
import "./todoFilter.css";

export default class TodoFilter extends React.Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button onClick={this.props.onAll} className="selected">
            All
          </button>
        </li>
        <li>
          <button onClick={this.props.onActive}>Active</button>
        </li>
        <li>
          <button onClick={this.props.onCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
