import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

import './Todo.css';

function Todo({ onDeleted, onToggleDone, title, completed, currentDate, date, id }) {
  let classNamesSpan = '';

  let classNamesLi = '';
  if (completed) {
    classNamesSpan += ' description';
    classNamesLi += 'completed';
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
          <span className={classNamesSpan}>{title}</span>
          <span className="created">created {todoDate} ago</span>
        </label>
        <button type="button" aria-label="edit" className="icon icon-edit" />
        <button
          type="button"
          aria-label="destroy"
          onClick={onDeleted}
          className="icon icon-destroy"
        />
      </div>
    </li>
  );
}

Todo.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

Todo.defaultProps = {
  onToggleDone: () => {},
  onDeleted: () => {},
};

export default Todo;
