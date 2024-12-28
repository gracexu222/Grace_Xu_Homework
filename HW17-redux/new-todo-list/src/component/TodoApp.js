import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
} from "../features/todoSlice";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      if (editId) {
        dispatch(editTodo({ id: editId, newText: task }));
        setEditId(null);
      } else {
        dispatch(addTodo({ id: Date.now(), task, completed: false })); // not use Date.now()
      }
      setTask("");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const startEdit = (todo) => {
    console.log("Selected todo:", todo);
    if (todo && todo.task) {
      setTask(todo.task);
      setEditId(todo.id);
    } else {
      console.error("Task is undefined for the selected todo.");
    }
  };

  const handleSetTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleSetTask}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span>{todo.task}</span>
            <div>
              <button onClick={() => handleToggle(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
              <button onClick={() => startEdit(todo)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
