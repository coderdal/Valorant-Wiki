import React from "react";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import logoimg from "../../assets/images/logo.png";

const Header = ({ children }) => {
  return (
    <header>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logoimg} alt={"Brand Logo"} />
          <h1>{children}</h1>
        </Link>
      </div>

      <div className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link to="/agents">Agents</Link>
            </li>
            <li>
              <Link to="/weapons">Weapons</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
