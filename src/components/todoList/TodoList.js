import React from "react";
import "./TodoList.css";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, onDeleted, onToggleDone, currentDate }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id, ...itemsProps } = item;
        return <Todo key={id} {...itemsProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} currentDate={currentDate} />;
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;
