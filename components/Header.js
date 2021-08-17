import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Carrye On</span>
      </h1>
      <p className={headerStyles.description}>Keep up to date with all my ramblings, both personal and technical</p>
    </div>
  );
};

export default Header;
