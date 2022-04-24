import React from "react";
import AgentCard from "./AgentCard";
import styles from "./Agents.module.css";
import { useSelector } from "react-redux";

import NotFound from "../404/NotFound";

const Agents = () => {
  const agents = useSelector((state) => state.agentsData.value);

  if (!agents) {
    return <NotFound msg="Sorry, An Error Occurred" />;
  } else {
    const agentList = agents.data.map((agent, index) => {
      return (
        <AgentCard
          key={index}
          displayName={agent.displayName}
          fullPortrait={agent.fullPortraitV2}
          role={agent.role.displayName}
          roleDesc={agent.role.description}
          roleIco={agent.role.displayIcon}
          smallImage={agent.displayIcon}
          abilities={agent.abilities}
          voice={agent.voiceLine.mediaList[0].wave}
        />
      );
    });

    return (
      <section className={styles.agentList}>
        <h2 className={styles.pageTitle}>Agents</h2>

        <div className={styles.agents}>{agentList}</div>
      </section>
    );
  }
};

export default Agents;
