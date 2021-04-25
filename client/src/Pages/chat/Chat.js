import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import MessageList from "../../Components/chatroom/MessageList";
import Message from "../../Components/chatroom/Message";

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
              <div className="chat-friends-list">
                {/* item 1 */}
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

                {/* item 2 */}
                <div className="chat-friend chat-friend--offline">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F2</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 2</span>
                </div>

                {/* item 3 */}
                <div className="chat-friend">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F3</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 3</span>
                </div>

                {/* item 4 */}
                <div className="chat-friend">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F4</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 4</span>
                </div>

                {/* item 5 */}
                <div className="chat-friend">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F5</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 5</span>
                </div>

                {/* item 6 */}
                <div className="chat-friend chat-friend--offline">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F6</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 6</span>
                </div>

                {/* item 7 */}
                <div className="chat-friend">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F7</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 7</span>
                </div>

                {/* item 8 */}
                <div className="chat-friend chat-friend--offline">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F8</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 8</span>
                </div>

                {/* item 9 */}
                <div className="chat-friend">
                  <div className="chat-friend__avatar-status">
                    <div className="chat-friend__avatar-wrapper">
                      <div className="chat-friend__avatar">
                        <span className="chat-friend__avatar-name">F9</span>
                      </div>
                      <span className="chat-friend__status"></span>
                    </div>
                  </div>
                  <span className="chat-friend__name">Friend 9</span>
                </div>
              </div>
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
