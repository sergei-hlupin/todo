import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function Todo({ todo, removeTodo, currentDate, editTodo, onToggleDone }) {
  const [title, setTitle] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  const divisorMinutes = todo.sumSecond % (60 * 60);
  const minutes = Math.floor(divisorMinutes / 60);
  const divisorSeconds = divisorMinutes % 60;
  const seconds = Math.ceil(divisorSeconds);
  const todoDate = formatDistanceToNow(todo.date, currentDate, { includeSeconds: true });

  function onSubmitEdit(e) {
    e.preventDefault();
    editTodo(todo.id, title);
    setEdit(false);
  }

  let classNamesLi = '';
  if (todo.completed) {
    classNamesLi += ' completed';
  }
  if (edit && !todo.completed) {
    classNamesLi += ' editing';
  }

  return (
    <li className={classNamesLi}>
      <div className="view">
        <input
          id={todo.id}
          onChange={() => onToggleDone(todo.id)}
          className="toggle"
          type="checkbox"
          checked={todo.completed}
        />
        <label htmlFor={todo.id}>
          <span className="title">{title}</span>
          <span className="description">
            <button type="button" className="icon icon-play" aria-label="play" />
            <button type="button" className="icon icon-pause" aria-label="pause" />
            {minutes}:{seconds}
          </span>
          <span className="description">created {todoDate} ago</span>
        </label>
        <button
          onClick={() => (!todo.completed ? setEdit(true) : null)}
          type="button"
          aria-label="edit"
          className="icon icon-edit"
        />
        <button
          onClick={() => removeTodo(todo.id)}
          type="button"
          aria-label="destroy"
          className="icon icon-destroy"
        />
      </div>
      <form onSubmit={onSubmitEdit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="edit"
          value={title}
        />
      </form>
    </li>
  );
}

export default Todo;

// class Todo extends Component {
//   static defaultProps = {
//     onToggleDone: () => {},
//     onDeleted: () => {},
//   };

//   static propTypes = {
//     onDeleted: PropTypes.func,
//     onToggleDone: PropTypes.func,
//     completed: PropTypes.bool.isRequired,
//   };

//   state = {
//     label: this.props.title,
//     edit: false,
//     time: {},
//     seconds: this.props.sumSecond,
//   };

//   onEditing = () => {
//     if (this.props.completed === false) {
//       this.setState({
//         edit: true,
//       });
//     }
//   };

//   onChangeEdit = (e) => {
//     this.setState({
//       label: e.target.value,
//     });
//   };

//   onSubmitEdit = (e) => {
//     e.preventDefault();
//     this.props.editItem(this.state.label, this.props.id);
//     this.setState({
//       edit: false,
//     });
//   };

//   componentDidMount() {
//     this.startTimer();
//   }

//   secondsToTimer(secs) {
//     const divisorMinutes = secs % (60 * 60);
//     const minutes = Math.floor(divisorMinutes / 60);
//     const divisorSeconds = divisorMinutes % 60;
//     const seconds = Math.ceil(divisorSeconds);
//     const obj = {
//       m: minutes,
//       s: seconds,
//     };
//     return obj;
//   }

//   startTimer = () => {
//     clearInterval(this.timer);
//     this.timer = setInterval(this.countUp, 1000);
//   };

//   stopTimer = () => {
//     clearInterval(this.timer);
//   };

//   countUp = () => {
//     const { seconds } = this.state;
//     const second = seconds - 1;
//     this.setState({ seconds: second, time: this.secondsToTimer(second) });
//   };

//   render() {
//     const { onDeleted, onToggleDone, title, completed, currentDate, date, id } = this.props;
//     let classNamesLi = '';
//     if (completed) {
//       classNamesLi += ' completed';
//     }
//     if (this.state.edit) {
//       classNamesLi += ' editing';
//     }

//     const todoDate = formatDistanceToNow(date, currentDate, { includeSeconds: true });

//     return (
//       <li className={classNamesLi}>
//         <div className="view">
//           <input
//             id={id}
//             onChange={onToggleDone}
//             className="toggle"
//             type="checkbox"
//             checked={completed}
//           />
//           <label htmlFor={id}>
//             <span className="title">{title}</span>
//             <span className="description">
//               <button
//                 onClick={this.startTimer}
//                 type="button"
//                 className="icon icon-play"
//                 aria-label="play"
//               />
//               <button
//                 onClick={this.stopTimer}
//                 type="button"
//                 className="icon icon-pause"
//                 aria-label="pause"
//               />
//               {this.state.time.m}:{this.state.time.s}
//             </span>
//             <span className="description">created {todoDate} ago</span>
//           </label>
//           <button
//             type="button"
//             onClick={this.onEditing}
//             aria-label="edit"
//             className="icon icon-edit"
//           />
//           <button
//             type="button"
//             aria-label="destroy"
//             onClick={onDeleted}
//             className="icon icon-destroy"
//           />
//         </div>
//         <form onSubmit={this.onSubmitEdit}>
//           <input
//             type="text"
//             onChange={this.onChangeEdit}
//             className="edit"
//             value={this.state.label}
//           />
//         </form>
//       </li>
//     );
//   }
// }
