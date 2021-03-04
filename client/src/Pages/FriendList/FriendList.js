import "./FriendList.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FriendListSearchForm from "../../Components/FriendListSearchForm";
import FriendListItem from "../../Components/FriendListItem";

function FriendList() {
  return (
    <Fragment>
      <Header elevated={true} />
      <main className="main">
        <section className="friendlist-section">
          <section className="friendlist-form-section">
            <FriendListSearchForm />
          </section>
          <section className="friends-section">
            <h1 className="friends-title">Friend List</h1>
            <ul className="friends">
              <FriendListItem profileName="Steve" key="1" isFriend="no" />
              <FriendListItem profileName="Clarke" key="2" isFriend="yes" />
              <FriendListItem profileName="Murphy" key="3" isFriend="no" />
              <FriendListItem profileName="Bellamy" key="4" isFriend="yes" />
              <FriendListItem profileName="Niyla" key="5" isFriend="yes" />
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FriendList;
