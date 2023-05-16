import React from "react";
import "./TodoList.css";
import Todo from "../todo/Todo";

const TodoList = ({ todos, onDeleted, onToggleDone}) => {  
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id, ...itemsProps } = item;
        return <Todo key={id} {...itemsProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />;
      })}
    </ul>
  );
};

export default TodoList;
