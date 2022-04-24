import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Weapons from "./components/Weapons/Weapons";
import Agents from "./components/Agents/Agents";
import Maps from "./components/Maps/Maps";

import Home from "./Home";

import Header from "./components/Header/Header";

import NotFound from "./components/404/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header>Wikipedia</Header>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/weapons" element={<Weapons />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/maps" element={<Maps />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
