import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    getDataStart: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getDataFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getDataStart, getDataSuccess, getDataFailure } = mainSlice.actions;

export default mainSlice.reducer;
