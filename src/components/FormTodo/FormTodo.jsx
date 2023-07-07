import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormTodo({ addTodo }) {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const sum = minutes * 60 + Number(seconds);
    const newTodo = {
      id: Date.now(),
      title: label,
      sumSecond: sum,
      date: new Date(),
      completed: false,
    };
    addTodo(newTodo);
    setLabel('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <label htmlFor="new-task">
        <input
          onChange={(e) => setLabel(e.target.value.trimStart())}
          value={label}
          className="new-todo"
          placeholder="Task"
          autoFocus
          id="new-task"
          required
        />
        <input
          onChange={(e) => setMinutes(e.target.value)}
          value={minutes}
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          required
        />
        <input
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          required
        />
      </label>
      <button type="submit" aria-label="submit" />
    </form>
  );
}

FormTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default FormTodo;
