import React from "react";

import MapsCard from "./MapsCard";

import styles from "./Maps.module.css";

import { useSelector } from "react-redux";

import NotFound from "../404/NotFound";

const Maps = () => {
  const maps = useSelector((state) => state.mapsData.value);

  if (!maps) {
    return <NotFound msg="Sorry, An Error Occurred" />;
  } else {
    const mapList = maps.data.map((map, index) => {

      return (
        <MapsCard
          key={index}
          name={map.displayName}
          smallImage={map.displayIcon}
          mediumImage={map.listViewIcon}
          bigImage={map.splash}
          regions={map.callouts}
          coordinates={map.coordinates}
        />
      );
    });

    return (
      <section className={styles.mapList}>
        <h2 className={styles.pageTitle}>Maps</h2>

        <div className={styles.maps}>{mapList}</div>
      </section>
    );
  }
};

export default Maps;
