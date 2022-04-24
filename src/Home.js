import React, { useEffect } from "react";

import axios from "axios";

import HomePage from "./components/Homepage/HomePage";

import { useSelector, useDispatch } from "react-redux";

import { setAgentsData } from "./stores/agentsData";
import { setWeaponsData } from "./stores/weaponsData";
import { setMapsData } from "./stores/mapsData";
import { setLoading } from "./stores/loading";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAgentsData = async () => {
      try {
        const response = await axios.get(
          "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
        );
        dispatch(setAgentsData(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMapsData = async () => {
      try {
        const response = await axios.get("https://valorant-api.com/v1/maps");
        dispatch(setMapsData(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWeaponsData = async () => {
      try {
        const response = await axios.get("https://valorant-api.com/v1/weapons");
        dispatch(setWeaponsData(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    const getDatas = async () => {
      await fetchAgentsData();
      await fetchWeaponsData();
      await fetchMapsData();

      dispatch(setLoading(false));
    };

    getDatas();
  }, [dispatch]);

  const isLoading = useSelector((state) => state.loading.value);

  return isLoading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <>
      <HomePage />
    </>
  );
};

export default Home;
