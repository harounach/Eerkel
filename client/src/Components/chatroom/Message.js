import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      <div className="message__avatar-wrapper">
        <div className="message__avatar">
          <span className="message__avatar-name">J</span>
        </div>
      </div>
      <div className="message__message-buble">
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero
          voluptate cum. Fugiat rem ex quo provident!
        </p>
      </div>
    </div>
  );
};

export default Message;
