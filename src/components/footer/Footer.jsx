import React from 'react';
import PropTypes from 'prop-types';

import TodoFilter from '../TodoFilter/TodoFilter';
import './Footer.css';

function Footer({ counter, onCompleted, clearCompleted, onActive, onAll }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TodoFilter onCompleted={onCompleted} onActive={onActive} onAll={onAll} />
      <button type="button" onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  clearCompleted: () => {},
};

Footer.propTypes = {
  counter: PropTypes.number.isRequired,
  onCompleted: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func,
  onActive: PropTypes.func.isRequired,
  onAll: PropTypes.func.isRequired,
};

export default Footer;
