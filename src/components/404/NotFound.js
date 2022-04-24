import React from "react";
import styles from "./NotFound.module.css";

import { Link } from "react-router-dom";

const NotFound = ({ msg = "Page not found !" }) => {
  return (
    <div className={styles.notFound}>
      <div className={styles.error404}>404</div>
      <div className={styles.errorMsg}>{msg}</div>
      <button className={styles.backToHomeBtn}>
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
