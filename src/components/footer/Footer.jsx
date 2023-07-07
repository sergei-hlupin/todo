import React from 'react';
import TodoFilter from '../TodoFilter/TodoFilter';

function Footer({ onFilter, removeCompleted, counter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TodoFilter onFilter={onFilter} />
      <button onClick={removeCompleted} type="button" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
