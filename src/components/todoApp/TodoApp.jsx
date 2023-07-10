import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import FormTodo from '../FormTodo/FormTodo';
import Footer from '../Footer/Footer';

function TodoApp() {
  const currentDate = Date.now();

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const editTodo = (id, newTitle) => {
    const idx = todos.findIndex((el) => el.id === id);
    const oldItem = todos[idx];
    const newItem = { ...oldItem, title: newTitle };
    setTodos([...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]);
  };

  const onFilter = (value) => {
    setFilter(value);
  };

  const onToggleDone = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const oldItem = todos[idx];
    const newItem = { ...oldItem, completed: !oldItem.completed };
    setTodos([...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]);
  };

  const todosFilter = todos.filter((item) => {
    if (filter === 'active') {
      return !item.completed;
    }
    if (filter === 'completed') {
      return item.completed;
    }
    if (filter === 'all') {
      return item.completed || !item.completed;
    }
    return todos;
  });

  const counter = todosFilter.filter((item) => item.completed === false).length;

  const editSumSecond = (newSeconds, id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const oldItem = todos[idx];
    const newItem = { ...oldItem, sumSecond: newSeconds };
    setTodos([...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <FormTodo addTodo={addTodo} />
      </header>
      <section className="main">
        <TodoList
          todos={todosFilter}
          removeTodo={removeTodo}
          currentDate={currentDate}
          editTodo={editTodo}
          onToggleDone={onToggleDone}
          editSumSecond={editSumSecond}
        />
        <Footer onFilter={onFilter} removeCompleted={removeCompleted} counter={counter} />
      </section>
    </section>
  );
}

export default TodoApp;
