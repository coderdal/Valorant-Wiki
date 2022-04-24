import { createSlice } from "@reduxjs/toolkit";

export const mapsdata = createSlice({
  name: "mapsdata",
  initialState: {
    value: "",
  },
  reducers: {
    setMapsData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMapsData } = mapsdata.actions;
export default mapsdata.reducer;
