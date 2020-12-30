import "./Home.scss";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo for Home</div>
        </nav>
      </header>
      <main className="main">
        <section className="home-section">
          <section className="friendlist-section">
            <h1 className="title">Friend List</h1>
            <div className="friendlist">list of friends</div>
          </section>
          <section className="chat-section">
            <div className="chatroom"></div>
            <form action="">
              <input type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </section>
        </section>
      </main>
      <footer className="footer">Footer</footer>
    </Fragment>
  );
}

export default Home;
