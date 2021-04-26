import React from "react";
import Button from "../button/Button";
import BtnIcon from "../button/BtnIcon";

const FriendsItem = (props) => {
  const classNames = props.user.isFriend ? " friends__item--friend" : "";
  const iconType = props.user.isFriend ? "remove" : "add";
  return (
    <div className={"friends__item" + classNames}>
      <div className="friends__avatar">
        <div className="friends__img">
          <span className="friends__img-name">{props.user.imgName}</span>
        </div>
      </div>
      <span className="friends__name">{props.user.name}</span>
      <Button classNames="btn--40 btn--rounded">
        <BtnIcon icon={iconType} />
      </Button>
    </div>
  );
};

export default FriendsItem;
