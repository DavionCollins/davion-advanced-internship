import { configureStore } from "@reduxjs/toolkit";
import statisticsReducer from './Slices/StatisticsSlice'
const dummyReducer = (state = {}) => state
export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    statistics: statisticsReducer,
  },
});
