import React from 'react';
import Todo from '../Todo/Todo';

function TodoList({ todos, removeTodo, currentDate, editTodo, onToggleDone }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            currentDate={currentDate}
            editTodo={editTodo}
            onToggleDone={onToggleDone}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
