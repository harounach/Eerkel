import React from "react";
import btnIcon from "./add_white_24dp.svg";
const FriendsItem = (props) => {
  return (
    <div className="friends__item">
      <div className="friends__avatar">
        <div className="friends__img">
          <span className="friends__img-name">{props.imgName}</span>
        </div>
      </div>
      <span className="friends__name">{props.name}</span>
      <button className="btn btn--40 btn--rounded">
        <img className="btn__icon" src={btnIcon} alt="" />
      </button>
    </div>
  );
};

export default FriendsItem;
