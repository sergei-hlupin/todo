import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

function TodoList({ todos, onDeleted, onToggleDone, currentDate, editItem }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id, ...itemsProps } = item;
        return (
          <Todo
            key={id}
            id={id}
            {...itemsProps}
            editItem={editItem}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            currentDate={currentDate}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;
