import React from 'react';
import PropTypes from 'prop-types';
import './todoFilter.css';

function TodoFilter({ onAll, onActive, onCompleted }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={onAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={onActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={onCompleted}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TodoFilter.defaultProps = {
  onAll: () => {},
  onActive: () => {},
  onCompleted: () => {},
};
TodoFilter.propTypes = {
  onAll: PropTypes.func,
  onActive: PropTypes.func,
  onCompleted: PropTypes.func,
};
export default TodoFilter;
