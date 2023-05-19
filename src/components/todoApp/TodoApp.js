import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from '../todoList/TodoList';
import NewTodo from '../newTodo/NewTodo';
import Footer from '../footer/Footer';

export default class TodoApp extends Component {
  id = 1;

  state = {
    filter: '',
    todos: [],
    date: new Date(),
  };

  componentDidMount() {
    
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  createTodoItem = (title) => {
    return {
      title,
      id: this.id++,
      completed: false,
      date: new Date(),
    };
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
      return {
        todos: newArr,
      };
    });
  };

  addItem = (title) => {
    const newItem = this.createTodoItem(title);
    this.setState(({ todos }) => {
      const newArr = [...todos, newItem];
      return { todos: newArr };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
      return {
        todos: newArr,
      };
    });
  };

  onActive = () => {
    this.setState({ filter: 'active' });
  };

  onCompleted = () => {
    this.setState({ filter: 'completed' });
  };

  onAll = () => {
    this.setState({ filter: 'all' });
  };

  clearCompleted = () => {
    this.setState(({ todos }) => {
      const newArr = todos.filter((item) => item.completed === false);
      return {
        todos: newArr,
      };
    });
  };

  render() {
    const filter = this.state.filter;
    const copyArr = [...this.state.todos];
    const todos = copyArr.filter((item) => {
      if (filter === 'active') {
        return !item.completed;
      }
      if (filter === 'completed') {
        return item.completed;
      }
      if (filter === 'all') {
        return item.completed || !item.completed;
      }
      return copyArr;
    });
    const counter = todos.filter((item) => item.completed === false).length;
    return (
      <section className="todoapp">
        <NewTodo addItem={this.addItem} />
        <section className="main">
          <TodoList
            todos={todos}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            currentDate={this.state.date}
          />
          <Footer
            onAll={this.onAll}
            onActive={this.onActive}
            onCompleted={this.onCompleted}
            clearCompleted={this.clearCompleted}
            counter={counter}
          />
        </section>
      </section>
    );
  }
}
