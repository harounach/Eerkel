import React from "react";

const ChatFriend = (props) => {
  let classNames = !props.user.isOnline ? " chat-friend--offline" : "";
  classNames += props.user.isActive ? " chat-friend--active" : "";
  return (
    <div className={"chat-friend" + classNames}>
      <div className="chat-friend__avatar-status">
        <div className="chat-friend__avatar-wrapper">
          <div className="chat-friend__avatar">
            <span className="chat-friend__avatar-name">
              {props.user.imgName}
            </span>
          </div>
          <span className="chat-friend__status"></span>
        </div>
      </div>
      <span className="chat-friend__name">{props.user.name}</span>
    </div>
  );
};

export default ChatFriend;
