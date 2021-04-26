import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import MessageList from "../../Components/chatroom/MessageList";
import Message from "../../Components/chatroom/Message";
import ChatFriendsList from "../../Components/chatroom/ChatFriendsList";
import ChatFriend from "../../Components/chatroom/ChatFriend";

import ChatForm from "../../Components/form/ChatForm";
import ButtonWrapper from "../../Components/button/ButtonWrapper";
import LinkButton from "../../Components/button/LinkButton";

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

const messagesData = [
  /* Message 1 */
  {
    id: 1,
    isMine: true,
    imgName: "J",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },

  /* Message 2 */
  {
    id: 2,
    isMine: false,
    imgName: "F1",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },

  /* Message 3 */
  {
    id: 3,
    isMine: true,
    imgName: "J",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },

  /* Message 4 */
  {
    id: 4,
    isMine: false,
    imgName: "F1",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },

  /* Message 5 */
  {
    id: 5,
    isMine: true,
    imgName: "J",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },

  /* Message 6 */
  {
    id: 6,
    isMine: false,
    imgName: "F1",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero voluptate cum. Fugiat rem ex quo provident!",
  },
];

const Chat = () => {
  return (
    <div className="chat-page__body">
      {/* appbar */}
      <Appbar classNames="chat-page__header" />

      {/* main */}
      <main className="chat-page__main main">
        <section className="chat-page__messages">
          <div className="chat-page__message-wrapper">
            <MessageList>
              {messagesData.map((message) => {
                return <Message key={message.id} message={message} />;
              })}
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

            <ButtonWrapper classNames="chat-page__btn-wrapper">
              <LinkButton url="/friendslist">Find Friends</LinkButton>
            </ButtonWrapper>
          </div>
        </aside>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Chat;
