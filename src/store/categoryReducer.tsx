import { createSlice } from "@reduxjs/toolkit";

export type CategoryType = {
  id: string;
  name: string;
  col?: number;
  urlname: string;
};
const INIT_STATE: CategoryType[] = [];
export const categorysSlice = createSlice({
  name: "category",
  initialState: INIT_STATE,
  reducers: {},
});
