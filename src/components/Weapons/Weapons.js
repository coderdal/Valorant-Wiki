import React from "react";
import styles from "./Weapons.module.css";
import WeaponCard from "./WeaponCard";

import NotFound from "../404/NotFound";

import { useSelector } from "react-redux";

const Weapons = () => {
  const weapons = useSelector((state) => state.weaponsData.value);

  if (!weapons) {
    return <NotFound msg="Sorry, An Error Occurred" />;
  } else {
    const weaponList = weapons.data.map((item, index) => {
      let displayName = item.displayName;
      let image = item.displayIcon;
      let prettyImg = item.skins[0].displayIcon;

      let category = "None";

      let cost = "0";

      let headshoot = "Unknown";

      let bodyshoot = "Unknown";

      let legshoot = "Unknown";

      let firerate = "Unknown";

      let magazinesize = "None";

      let equiptime = "Unknown";

      let reloadtime = "None";

      let runspeed = "Unknown";

      if (index !== 17) {
        displayName = item.displayName;
        image = item.displayIcon;
        prettyImg = item.skins[0].displayIcon;
        category = item.shopData.category;
        cost = item.shopData.cost;
        headshoot = item.weaponStats.damageRanges[0].headDamage;
        bodyshoot = item.weaponStats.damageRanges[0].bodyDamage;
        legshoot = item.weaponStats.damageRanges[0].legDamage;
        firerate = item.weaponStats.fireRate;
        magazinesize = item.weaponStats.magazineSize;
        equiptime = item.weaponStats.equipTimeSeconds;
        reloadtime = item.weaponStats.reloadTimeSeconds;
        runspeed = item.weaponStats.runSpeedMultiplier;
      }

      return (
        <WeaponCard
          key={index}
          name={displayName}
          image={image}
          prettyImg={prettyImg}
          category={category}
          cost={cost}
          headShoot={headshoot}
          bodyShoot={bodyshoot}
          legShoot={legshoot}
          fireRate={firerate}
          magazineSize={magazinesize}
          equipTime={equiptime}
          reloadTime={reloadtime}
          runSpeed={runspeed}
        />
      );
    });

    return (
      <section className={styles.weaponList}>
        <h2 className={styles.pageTitle}>Weapons</h2>

        <div className={styles.weapons}>{weaponList}</div>
      </section>
    );
  }
};

export default Weapons;
