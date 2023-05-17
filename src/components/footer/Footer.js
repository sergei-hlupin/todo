import React from "react";
import TodoFilter from "../todoFilter/todoFilter";
import "./Footer.css";
import PropTypes from "prop-types";

function Footer({ counter, onCompleted, clearCompleted, onActive, onAll }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TodoFilter onCompleted={onCompleted} onActive={onActive} onAll={onAll} />
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  clearCompleted: () => {},
};

Footer.protoTypes = {
  counter: PropTypes.number,
  onCompleted: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  onAll: PropTypes.func.isRequired,
};

export default Footer;
