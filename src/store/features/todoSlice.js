import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, name: "example" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
