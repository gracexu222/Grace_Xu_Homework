import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo,toggleComplete } from "../features/TodoSlice";
import '../App.css'


const TodoApp = () => {
  const [task, setTask] = useState(" ");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo({ id: Date.now(), task }));
      setTask(" ");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle =(id) => {
    dispatch(toggleComplete(id));
  };

  const handleInputChange = (e) => {

    setTask(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux To-do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.task}</span>
            <div>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
