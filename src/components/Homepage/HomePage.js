import React from "react";
import styles from "./HomePage.module.css";

import AgentCard from "./AgentCard";

import WeaponCard from "./WeaponCard";

import MapCard from "./MapCard";

import { useSelector } from "react-redux";

const HomePage = () => {
  const agents = useSelector((state) => state.agentsData.value);
  const maps = useSelector((state) => state.mapsData.value);
  const weapons = useSelector((state) => state.weaponsData.value);

  const agentList = agents.data.map((agent, index) => {
    return (
      <AgentCard
        key={index}
        displayName={agent.displayName}
        fullPortrait={agent.fullPortraitV2}
        role={agent.role.displayName}
        roleDesc={agent.role.description}
        roleIco={agent.role.displayIcon}
      />
    );
  });

  const weaponList = weapons.data.map((weapon, index) => {
    return (
      <WeaponCard
        key={index}
        name={weapon.displayName}
        image={weapon.displayIcon}
      />
    );
  });

  const mapList = maps.data.map((map, index) => {
    return (
      <MapCard
        key={index}
        name={map.displayName}
        smallImage={map.displayIcon}
        image={map.splash}
      />
    );
  });

  return (
    <main>
      <section className={styles.agentList}>
        <h2 className={styles.sectionTitle}>Agents</h2>

        <div className={styles.agents}>{agentList}</div>
      </section>

      <section className={styles.weaponList}>
        <h2 className={styles.sectionTitle}>Weapons</h2>

        <div className={styles.weapons}>{weaponList}</div>
      </section>

      <section className={styles.mapList}>
        <h2 className={styles.sectionTitle}>Maps</h2>

        <div className={styles.maps}>{mapList}</div>
      </section>
    </main>
  );
};

export default HomePage;
