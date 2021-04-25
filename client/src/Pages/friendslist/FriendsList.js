import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Friends from "../../Components/friends/Friends";
import FriendsItem from "../../Components/friends/FriendsItem";

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
          <Friends>
            {/* item 1 */}
            <FriendsItem imgName="F1" name="Friend 1" />

            {/* item 2 */}
            <FriendsItem imgName="F2" name="Friend 2" />

            {/* item 3 */}
            <FriendsItem imgName="F3" name="Friend 3" />

            {/* item 4 */}
            <FriendsItem imgName="F4" name="Friend 4" />

            {/* item 5 */}
            <FriendsItem imgName="F5" name="Friend 5" />
          </Friends>
        </section>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FriendsList;
