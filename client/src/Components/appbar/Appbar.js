import React from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDopdown";

const Appbar = () => {
  return (
    <header className="home-page__header appbar">
      {/* menu */}
      <div className="appbar__section">
        <MenuButton />
      </div>

      {/* logo */}
      <div className="appbar__section appbar__section--logo">
        <Logo />
      </div>

      {/* Profile dropdown */}
      <div className="appbar__section appbar__section--right">
        <ProfileDropdown />
      </div>
      {/* appbar__scrim */}
      <div className="appbar__scrim"></div>
    </header>
  );
};

export default Appbar;
