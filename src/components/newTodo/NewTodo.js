import React, { Component } from "react";
import "./NewTodo.css";

export default class NewTodo extends Component {
  state = {
    label: "",
  };
  onChange = (e) => {
    this.setState({
      label: e.target.value.trimLeft(),
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label) {
      this.props.addItem(this.state.label);
    }
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="header">
        <h1>todos</h1>
        <label>
          <input
            onChange={this.onChange}
            value={this.state.label}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </label>
      </form>
    );
  }
}
