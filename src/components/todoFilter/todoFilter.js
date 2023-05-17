import React from "react";
import "./todoFilter.css";
import PropTypes from "prop-types";

export default class TodoFilter extends React.Component {
  static propTypes = {
    onAll: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    onCompleted: PropTypes.func.isRequired,
  };
  static defaultProps = {
    onAll: () => {},
    onActive: () => {},
    onCompleted: () => {},
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button onClick={this.props.onAll}>All</button>
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
