import React from "react";

const FriendsList = () => {
  return (
    <div>
      {/* appbar */}
      <header className="friendslist-page__header appbar appbar--space-between">
        {/* logo */}
        <div className="appbar__section">
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
      </header>

      {/* main */}
      <main className="friendslist-page__main main">
        <section className="friendslist-page__form">
          <form className="seach-form">
            <input
              className="seach-form__input-control"
              id="search"
              type="text"
              name="search"
            />
            <button className="btn btn--search" type="submit">
              <img
                className="btn__icon"
                src="./images/search_white_24dp.svg"
                alt=""
              />
            </button>
          </form>
        </section>
        <section className="friendslist-page__list">
          <h2 className="subtitle">Friends List</h2>
          <div className="friends">
            {/* item 1 */}
            <div className="friends__item">
              <div className="friends__avatar">
                <div className="friends__img">
                  <span className="friends__img-name">F1</span>
                </div>
              </div>
              <span className="friends__name">Friend 1</span>
              <button className="btn btn--40 btn--rounded">
                <img
                  className="btn__icon"
                  src="./images/add_white_24dp.svg"
                  alt=""
                />
              </button>
            </div>

            {/* item 2 */}
            <div className="friends__item">
              <div className="friends__avatar">
                <div className="friends__img">
                  <span className="friends__img-name">F2</span>
                </div>
              </div>
              <span className="friends__name">Friend 2</span>
              <button className="btn btn--40 btn--rounded">
                <img
                  className="btn__icon"
                  src="./images/add_white_24dp.svg"
                  alt=""
                />
              </button>
            </div>

            {/* item 3 */}
            <div className="friends__item friends__item--friend">
              <div className="friends__avatar">
                <div className="friends__img">
                  <span className="friends__img-name">F3</span>
                </div>
              </div>
              <span className="friends__name">Friend 3</span>
              <button className="btn btn--40 btn--rounded">
                <img
                  className="btn__icon"
                  src="./images/remove_white_24dp.svg"
                  alt=""
                />
              </button>
            </div>

            {/* item 4 */}
            <div className="friends__item">
              <div className="friends__avatar">
                <div className="friends__img">
                  <span className="friends__img-name">F4</span>
                </div>
              </div>
              <span className="friends__name">Friend 4</span>
              <button className="btn btn--40 btn--rounded">
                <img
                  className="btn__icon"
                  src="./images/add_white_24dp.svg"
                  alt=""
                />
              </button>
            </div>

            {/* item 5 */}
            <div className="friends__item friends__item--friend">
              <div className="friends__avatar">
                <div className="friends__img">
                  <span className="friends__img-name">F5</span>
                </div>
              </div>
              <span className="friends__name">Friend 5</span>
              <button className="btn btn--40 btn--rounded">
                <img
                  className="btn__icon"
                  src="./images/remove_white_24dp.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="friendslist-page__footer footer">
        <p className="copyright-notice">Copyright Information Example</p>
      </footer>
    </div>
  );
};

export default FriendsList;
