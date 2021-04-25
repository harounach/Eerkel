import React from "react";

const Chat = () => {
  return (
    <div>
      {/* appbar */}
      <header className="chat-page__header appbar">
        {/* menu */}
        <div className="appbar__section">
          <button className="appbar__menu">
            <div className="appbar__icon">
              <span className="appbar__bar appbar__bar--top"></span>
              <span className="appbar__bar appbar__bar--middle"></span>
              <span className="appbar__bar appbar__bar--bottom"></span>
            </div>
          </button>
        </div>

        {/* logo */}
        <div className="appbar__section appbar__section--logo">
          <a className="logo" href="home.html">
            <img className="logo__img" src="./images/App-Icon.svg" alt="" />
          </a>
        </div>

        {/* Profile dropdown */}
        <div className="appbar__section appbar__section--right">
          <div className="profile-dropdown">
            <div className="profile-dropdown__img-wrapper">
              <div className="profile-dropdown__img">
                <span className="profile-dropdown__name">J</span>
              </div>
            </div>
            <div className="profile-dropdown__content">
              <a href="#" className="profile-dropdown__link">
                Profile
              </a>
              <a href="#" className="profile-dropdown__link">
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* appbar__scrim */}
        <div className="appbar__scrim"></div>
      </header>

      {/* main */}
      <main className="chat-page__main main">
        <section className="chat-page__messages">
          <div className="chat-page__message-wrapper">
            <div className="chat-page__list message-list">
              {/* item 1 */}
              <div className="message">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">J</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="message message--right">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">F1</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>

              {/* item 3 */}
              <div className="message">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">J</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="message message--right">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">F1</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>

              {/* item 5 */}
              <div className="message">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">J</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="message message--right">
                <div className="message__avatar-wrapper">
                  <div className="message__avatar">
                    <span className="message__avatar-name">F1</span>
                  </div>
                </div>
                <div className="message__message-buble">
                  <p className="message__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque vero voluptate cum. Fugiat rem ex quo provident!
                  </p>
                </div>
              </div>
            </div>
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
      <footer className="chat-page__footer footer">
        <p className="copyright-notice">Copyright Information Example</p>
      </footer>
    </div>
  );
};

export default Chat;
