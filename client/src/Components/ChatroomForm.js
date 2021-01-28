import "./ChatroomForm.scss";

function ChatroomForm(props) {
  return (
    <form className="chatroom-form" action="">
      <div className="chatroom-form__input-section">
        <input
          className="chatroom-form__input-control"
          type="text"
          name="message"
        />
        <button className="chatroom-form__btn" type="submit">
          S
        </button>
      </div>
    </form>
  );
}

export default ChatroomForm;
