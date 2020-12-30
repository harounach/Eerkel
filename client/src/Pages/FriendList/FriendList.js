import "./FriendList.scss";
import { Fragment } from "react";

function FriendList() {
  return (
    <Fragment>
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo</div>
        </nav>
      </header>
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
      <footer className="footer">Footer</footer>
    </Fragment>
  );
}

export default FriendList;
