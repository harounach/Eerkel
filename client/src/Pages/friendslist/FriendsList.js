import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";

const FriendsList = () => {
  return (
    <div>
      {/* appbar */}
      <Appbar />

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
      <Footer />
    </div>
  );
};

export default FriendsList;
