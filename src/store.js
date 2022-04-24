import { configureStore } from "@reduxjs/toolkit";
import AgentsData from "./stores/agentsData";
import Loading from "./stores/loading";

import MapsData from "./stores/mapsData";
import weaponsdata from "./stores/weaponsData";

export default configureStore({
  reducer: {
    agentsData: AgentsData,
    mapsData: MapsData,
    weaponsData: weaponsdata,
    loading: Loading,
  },
});
