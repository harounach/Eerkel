import "./FriendList.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function FriendList() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="signup-section">
          <section className="form-section">
            <form action="">
              <input type="text" name="search" />
              <button type="submit">Search</button>
            </form>
          </section>
          <section className="friendlist-section">
            <h1 className="title">Friend List</h1>
            <div className="friendlist">list of friends</div>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FriendList;
