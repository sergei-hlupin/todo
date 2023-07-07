import React from 'react';
import PropTypes from 'prop-types';

function TodoFilter({ onFilter }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => onFilter('all')}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onFilter('active')}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onFilter('completed')}>
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
