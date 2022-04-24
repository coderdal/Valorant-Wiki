import { createSlice } from "@reduxjs/toolkit";

export const agentsdata = createSlice({
  name: "agentsdata",
  initialState: {
    value: "",
  },
  reducers: {
    setAgentsData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAgentsData } = agentsdata.actions;
export default agentsdata.reducer;
