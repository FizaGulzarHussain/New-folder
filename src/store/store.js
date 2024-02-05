import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import modeReducer from "./features/modeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    mode: modeReducer,
  },
});

export default store;
