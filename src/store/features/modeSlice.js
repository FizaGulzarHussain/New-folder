import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: localStorage.getItem("mode") || "text-[#1e3a8a]",
  bg: localStorage.getItem("bg") || "bg-[#1e3a8a]",
  grad: localStorage.getItem("grad") || "#1e3a8a",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;

      localStorage.setItem("mode", action.payload);
    },
    setModeBg: (state, action) => {
      state.bg = action.payload;
      localStorage.setItem("bg", action.payload);
    },
    setGrad: (state, action) => {
      state.grad = action.payload;
      localStorage.setItem("grad", action.payload);
    },
  },
});

export const { setMode, setModeBg, setGrad } = modeSlice.actions;

export default modeSlice.reducer;
