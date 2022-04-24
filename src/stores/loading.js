import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
  name: "loading",
  initialState: {
    value: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoading } = loading.actions;
export default loading.reducer;
