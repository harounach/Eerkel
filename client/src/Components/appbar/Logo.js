import React from "react";
import appIcon from "./App-Icon.svg";

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img className="logo__img" src={appIcon} alt="" />
    </a>
  );
};

export default Logo;
