import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeHeadingIndex: 0,
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setActiveHeadingIndex: (state, action) => {
      state.activeHeadingIndex = action.payload;
    },
    incrementHeadingIndex: (state) => {
      state.activeHeadingIndex = (state.activeHeadingIndex + 1) % 6;
    },
  },
});

export const { setActiveHeadingIndex, incrementHeadingIndex } =
  statisticsSlice.actions;
export default statisticsSlice.reducer;
