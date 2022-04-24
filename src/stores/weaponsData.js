import { createSlice } from "@reduxjs/toolkit";

export const weaponsdata = createSlice({
  name: "weaponsdata",
  initialState: {
    value: "",
  },
  reducers: {
    setWeaponsData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWeaponsData } = weaponsdata.actions;
export default weaponsdata.reducer;
