import "./Message.scss";

function Message(props) {
  return (
    <li className="message">
      <div className="message__avatar"></div>
      <p className="message__content">{props.message}</p>
    </li>
  );
}

export default Message;
