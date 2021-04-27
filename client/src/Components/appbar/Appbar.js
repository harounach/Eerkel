import React from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDopdown";

const Appbar = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  const logoSectionMargin = props.hasMenu ? " appbar__section--logo" : "";
  return (
    <header className={"appbar" + classNames}>
      {/* menu */}
      {props.hasMenu && (
        <div className="appbar__section">
          <MenuButton />
        </div>
      )}

      {/* logo */}
      <div className={"appbar__section" + logoSectionMargin}>
        <Logo />
      </div>

      {/* Profile dropdown */}
      {props.hasDropdown && (
        <div className="appbar__section appbar__section--right">
          <ProfileDropdown />
        </div>
      )}

      {/* appbar__scrim */}
      <div className="appbar__scrim"></div>
    </header>
  );
};

export default Appbar;
