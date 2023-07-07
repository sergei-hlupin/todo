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
    const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
    setTodos(newArr);
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
        />
        <Footer onFilter={onFilter} removeCompleted={removeCompleted} counter={counter} />
      </section>
    </section>
  );
}

export default TodoApp;

// class TodoApp extends Component {
//   id = 1;

//   state = {
//     filter: '',
//     todos: [],
//     date: new Date(),
//   };

//   componentDidMount() {
//     this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   createTodoItem = (title, sumSecond) => {
//     return {
//       title,
//       id: this.id++,
//       completed: false,
//       date: new Date(),
//       sumSecond,
//     };
//   };

//   deleteItem = (id) => {
//     this.setState(({ todos }) => {
//       const idx = todos.findIndex((el) => el.id === id);
//       const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
//       return {
//         todos: newArr,
//       };
//     });
//   };

//   addItem = (title, sumSecond) => {
//     const newItem = this.createTodoItem(title, sumSecond);
//     this.setState(({ todos }) => {
//       const newArr = [...todos, newItem];
//       return { todos: newArr };
//     });
//   };

//   editItem = (newTitle, id) => {
//     this.setState(({ todos }) => {
//       const idx = todos.findIndex((el) => el.id === id);
//       const oldItem = todos[idx];
//       const newItem = { ...oldItem, title: newTitle };
//       const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
//       return {
//         todos: newArr,
//       };
//     });
//   };

//   onToggleDone = (id) => {
//     this.setState(({ todos }) => {
//       const idx = todos.findIndex((el) => el.id === id);
//       const oldItem = todos[idx];
//       const newItem = { ...oldItem, completed: !oldItem.completed };
//       const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
//       return {
//         todos: newArr,
//       };
//     });
//   };

//   onActive = () => {
//     this.setState({ filter: 'active' });
//   };

//   onCompleted = () => {
//     this.setState({ filter: 'completed' });
//   };

//   onAll = () => {
//     this.setState({ filter: 'all' });
//   };

//   clearCompleted = () => {
//     this.setState(({ todos }) => {
//       const newArr = todos.filter((item) => item.completed === false);
//       return {
//         todos: newArr,
//       };
//     });
//   };

//   render() {
//     const filter = this.state.filter;
//     const copyArr = [...this.state.todos];
//     const todos = copyArr.filter((item) => {
//       if (filter === 'active') {
//         return !item.completed;
//       }
//       if (filter === 'completed') {
//         return item.completed;
//       }
//       if (filter === 'all') {
//         return item.completed || !item.completed;
//       }
//       return copyArr;
//     });
//     const counter = todos.filter((item) => item.completed === false).length;
//     return (
//       <section className="todoapp">
//         <header className="header">
//           <h1>todos</h1>
//           <NewTodo addItem={this.addItem} />
//         </header>
//         <section className="main">
//           <TodoList
//             todos={todos}
//             onDeleted={this.deleteItem}
//             onToggleDone={this.onToggleDone}
//             currentDate={this.state.date}
//             editItem={this.editItem}
//           />
//           <Footer
//             onAll={this.onAll}
//             onActive={this.onActive}
//             onCompleted={this.onCompleted}
//             clearCompleted={this.clearCompleted}
//             counter={counter}
//           />
//         </section>
//       </section>
//     );
//   }
// }

// export default TodoApp;
