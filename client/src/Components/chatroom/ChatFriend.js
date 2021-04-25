import React from "react";

const ChatFriend = (props) => {
  return (
    <div className="chat-friend chat-friend--active">
      <div className="chat-friend__avatar-status">
        <div className="chat-friend__avatar-wrapper">
          <div className="chat-friend__avatar">
            <span className="chat-friend__avatar-name">F1</span>
          </div>
          <span className="chat-friend__status"></span>
        </div>
      </div>
      <span className="chat-friend__name">Friend 1</span>
    </div>
  );
};

export default ChatFriend;
