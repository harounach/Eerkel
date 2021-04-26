import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import MessageList from "../../Components/chatroom/MessageList";
import Message from "../../Components/chatroom/Message";
import ChatFriendsList from "../../Components/chatroom/ChatFriendsList";
import ChatFriend from "../../Components/chatroom/ChatFriend";

import ChatForm from "../../Components/form/ChatForm";

/* Placeholder data */
const friendsData = [
  /* item 1 */
  {
    id: 1,
    imgName: "F1",
    name: "Friend 1",
    isOnline: true,
    isActive: false,
  },

  /* item 2 */
  {
    id: 2,
    imgName: "F2",
    name: "Friend 2",
    isOnline: false,
    isActive: false,
  },

  /* item 3 */
  {
    id: 3,
    imgName: "F3",
    name: "Friend 3",
    isOnline: true,
    isActive: false,
  },

  /* item 4 */
  {
    id: 4,
    imgName: "F4",
    name: "Friend 4",
    isOnline: true,
    isActive: true,
  },

  /* item 5 */
  {
    id: 5,
    imgName: "F5",
    name: "Friend 5",
    isOnline: true,
    isActive: false,
  },

  /* item 6 */
  {
    id: 6,
    imgName: "F6",
    name: "Friend 6",
    isOnline: true,
    isActive: false,
  },

  /* item 7 */
  {
    id: 7,
    imgName: "F7",
    name: "Friend 7",
    isOnline: true,
    isActive: false,
  },

  /* item 8 */
  {
    id: 8,
    imgName: "F8",
    name: "Friend 8",
    isOnline: false,
    isActive: false,
  },

  /* item 9 */
  {
    id: 9,
    imgName: "F9",
    name: "Friend 9",
    isOnline: false,
    isActive: false,
  },
];

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
          <ChatForm classNames="chat-page__chat-form" />
        </section>
        <aside className="chat-page__friends">
          <div className="chat-page__chat-friends">
            <h2 className="chat-page__subtitle subtitle">Friends List</h2>
            <div className="chat-page__friends-list">
              <ChatFriendsList>
                {friendsData.map((user) => {
                  return <ChatFriend key={user.id} user={user} />;
                })}
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
