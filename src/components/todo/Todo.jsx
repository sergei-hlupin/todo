import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

class Todo extends Component {
  static defaultProps = {
    onToggleDone: () => {},
    onDeleted: () => {},
  };

  static propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    completed: PropTypes.bool.isRequired,
  };

  state = {
    label: this.props.title,
    edit: false,
  };

  onEditing = () => {
    if (this.props.completed === false) {
      this.setState({
        edit: true,
      });
    }
  };

  onChangeEdit = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    this.props.editItem(this.state.label, this.props.id);
    this.setState({
      edit: false,
    });
  };

  render() {
    const { onDeleted, onToggleDone, title, completed, currentDate, date, id } = this.props;
    let classNamesLi = '';
    if (completed) {
      classNamesLi += ' completed';
    }
    if (this.state.edit) {
      classNamesLi += ' editing';
    }

    const todoDate = formatDistanceToNow(date, currentDate, { includeSeconds: true });
    return (
      <li className={classNamesLi}>
        <div className="view">
          <input
            id={id}
            onChange={onToggleDone}
            className="toggle"
            type="checkbox"
            checked={completed}
          />
          <label htmlFor={id}>
            <span className="description">{title}</span>
            <span className="created">created {todoDate} ago</span>
          </label>
          <button
            type="button"
            onClick={this.onEditing}
            aria-label="edit"
            className="icon icon-edit"
          />
          <button
            type="button"
            aria-label="destroy"
            onClick={onDeleted}
            className="icon icon-destroy"
          />
        </div>
        <form onSubmit={this.onSubmitEdit}>
          <input
            type="text"
            onChange={this.onChangeEdit}
            className="edit"
            value={this.state.label}
          />
        </form>
      </li>
    );
  }
}

export default Todo;
