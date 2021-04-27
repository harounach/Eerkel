import React from "react";

const ProfileDopdown = () => {
  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown__img-wrapper">
        <div className="profile-dropdown__img">
          <span className="profile-dropdown__name">J</span>
        </div>
      </div>
      <div className="profile-dropdown__content">
        <a href="/profile" className="profile-dropdown__link">
          Profile
        </a>
        <a href="/logout" className="profile-dropdown__link">
          Logout
        </a>
      </div>
    </div>
  );
};

export default ProfileDopdown;
