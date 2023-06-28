import React, { Component } from 'react';

class NewTodo extends Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value.trimLeft(),
    });
  };

  onChangeMinutes = (e) => {
    this.setState({
      minutes: Number(e.target.value),
    });
  };

  onChangeSeconds = (e) => {
    this.setState({
      seconds: Number(e.target.value),
    });
  };

  onSubmit = (e) => {
    const { label, minutes, seconds } = this.state;
    e.preventDefault();
    const sum = minutes * 60 + seconds;
    this.props.addItem(label, sum);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <label htmlFor="new-task">
          <input
            onChange={this.onChange}
            value={this.state.label}
            className="new-todo"
            placeholder="Task"
            autoFocus
            id="new-task"
            required
          />
          <input
            onChange={this.onChangeMinutes}
            value={this.state.minutes}
            className="new-todo-form__timer"
            placeholder="Min"
            type="number"
            required
          />
          <input
            onChange={this.onChangeSeconds}
            value={this.state.seconds}
            className="new-todo-form__timer"
            placeholder="Sec"
            type="number"
            required
          />
        </label>
        <button type="submit" aria-label="submit" />
      </form>
    );
  }
}

export default NewTodo;

/* <input className="new-todo-form__timer" placeholder="Min" />
<input className="new-todo-form__timer" placeholder="Sec" /> */
