import React from "react";

const Message = (props) => {
  let classNames = !props.message.isMine ? " message--right" : "";
  return (
    <div className={"message" + classNames}>
      <div className="message__avatar-wrapper">
        <div className="message__avatar">
          <span className="message__avatar-name">{props.message.imgName}</span>
        </div>
      </div>
      <div className="message__message-buble">
        <p className="message__text">{props.message.message}</p>
      </div>
    </div>
  );
};

export default Message;
