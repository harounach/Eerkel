import React from "react";
import Button from "../button/Button";
import BtnIcon from "../button/BtnIcon";

const ChatForm = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return (
    <form className={"chat-form" + classNames}>
      <input
        className="chat-form__input-control"
        id="message"
        type="text"
        name="message"
      />
      <Button classNames="btn--search">
        <BtnIcon icon="send" />
      </Button>
    </form>
  );
};

export default ChatForm;
