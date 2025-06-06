import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserAuthenticated: undefined,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isUserAuthenticated = action.payload;
    },
  },
});

export const { userLogin } = headerSlice.actions;
export default headerSlice.reducer;
