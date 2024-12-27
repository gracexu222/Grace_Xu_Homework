import { createSlice } from '@reduxjs/toolkit';
import { todo } from 'node:test';

const initialState = {
  todos: [],

};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers:{
    addTodo: (state,action) => {
      state.todos.push(action.payload);

    },
    removeTodo:(state,action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    toggleComplete:(state,action) => {
      state.todos = state.todos.find((todo) => todo.id === action.payload)
      if(todo){
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {addTodo,removeTodo,toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;