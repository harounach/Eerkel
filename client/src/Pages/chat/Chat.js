import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import MessageList from "../../Components/chatroom/MessageList";
import Message from "../../Components/chatroom/Message";
import ChatFriendsList from "../../Components/chatroom/ChatFriendsList";
import ChatFriend from "../../Components/chatroom/ChatFriend";

const Chat = () => {
  return (
    <div>
      {/* appbar */}
      <Appbar />

      {/* main */}
      <main className="chat-page__main main">
        <section className="chat-page__messages">
          <div className="chat-page__message-wrapper">
            <MessageList>
              {/* item 1 */}
              <Message />

              {/* item 2 */}
              <Message />

              {/* item 3 */}
              <Message />

              {/* item 4 */}
              <Message />

              {/* item 5 */}
              <Message />

              {/* item 6 */}
              <Message />
            </MessageList>
          </div>

          {/* chat form */}
          <form className="chat-page__chat-form chat-form">
            <input
              className="chat-form__input-control"
              id="message"
              type="text"
              name="message"
            />
            <button className="btn btn--search" type="submit">
              <img
                className="btn__icon"
                src="./images/send_white_24dp.svg"
                alt=""
              />
            </button>
          </form>
        </section>
        <aside className="chat-page__friends">
          <div className="chat-page__chat-friends">
            <h2 className="chat-page__subtitle subtitle">Friends List</h2>
            <div className="chat-page__friends-list">
              <ChatFriendsList>
                {/* item 1 */}
                <ChatFriend />

                {/* item 2 */}
                <ChatFriend />

                {/* item 3 */}
                <ChatFriend />

                {/* item 4 */}
                <ChatFriend />

                {/* item 5 */}
                <ChatFriend />

                {/* item 6 */}
                <ChatFriend />

                {/* item 7 */}
                <ChatFriend />

                {/* item 8 */}
                <ChatFriend />

                {/* item 9 */}
                <ChatFriend />
              </ChatFriendsList>
            </div>

            <div className="chat-page__btn-wrapper btn-wrapper">
              <a className="btn" href="#">
                Find Friends
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Chat;
