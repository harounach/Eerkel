import React from "react";

const MenuButton = () => {
  return (
    <button className="appbar__menu">
      <div className="appbar__icon">
        <span className="appbar__bar appbar__bar--top"></span>
        <span className="appbar__bar appbar__bar--middle"></span>
        <span className="appbar__bar appbar__bar--bottom"></span>
      </div>
    </button>
  );
};

export default MenuButton;
