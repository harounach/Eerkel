import React from "react";

const Appbar = () => {
  return (
    <header className="chat-page__header appbar">
      {/* menu */}
      <div className="appbar__section">
        <button className="appbar__menu">
          <div className="appbar__icon">
            <span className="appbar__bar appbar__bar--top"></span>
            <span className="appbar__bar appbar__bar--middle"></span>
            <span className="appbar__bar appbar__bar--bottom"></span>
          </div>
        </button>
      </div>

      {/* logo */}
      <div className="appbar__section appbar__section--logo">
        <a className="logo" href="home.html">
          <img className="logo__img" src="./images/App-Icon.svg" alt="" />
        </a>
      </div>

      {/* Profile dropdown */}
      <div className="appbar__section appbar__section--right">
        <div className="profile-dropdown">
          <div className="profile-dropdown__img-wrapper">
            <div className="profile-dropdown__img">
              <span className="profile-dropdown__name">J</span>
            </div>
          </div>
          <div className="profile-dropdown__content">
            <a href="#" className="profile-dropdown__link">
              Profile
            </a>
            <a href="#" className="profile-dropdown__link">
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* appbar__scrim */}
      <div className="appbar__scrim"></div>
    </header>
  );
};

export default Appbar;
