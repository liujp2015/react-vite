import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
export const store = configureStore({
  reducer: {
    //分模块
    themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
