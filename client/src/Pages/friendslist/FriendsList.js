import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Friends from "../../Components/friends/Friends";
import FriendsItem from "../../Components/friends/FriendsItem";

import SearchForm from "../../Components/form/SearchForm";

const friendsData = [
  /* item 1 */
  {
    id: 1,
    imgName: "F1",
    name: "Friend 1",
    isFriend: false,
  },

  /* item 2 */
  {
    id: 2,
    imgName: "F2",
    name: "Friend 2",
    isFriend: false,
  },

  /* item 3 */
  {
    id: 3,
    imgName: "F3",
    name: "Friend 3",
    isFriend: true,
  },

  /* item 4 */
  {
    id: 4,
    imgName: "F4",
    name: "Friend 4",
    isFriend: false,
  },

  /* item 5 */
  {
    id: 5,
    imgName: "F5",
    name: "Friend 5",
    isFriend: true,
  },
];

const FriendsList = () => {
  return (
    <div className="friendslist-page__body">
      {/* appbar */}
      <Appbar />

      {/* main */}
      <main className="friendslist-page__main main">
        <section className="friendslist-page__form">
          <SearchForm />
        </section>
        <section className="friendslist-page__list">
          <h2 className="subtitle">Friends List</h2>
          <Friends>
            {friendsData.map((user) => {
              return <FriendsItem key={user.id} user={user} />;
            })}
          </Friends>
        </section>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FriendsList;
