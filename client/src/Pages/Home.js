import { Fragment } from "react";

import React from "react";
import Appbar from "../Components/appbar/Appbar";

const Home = () => {
  return (
    <div>
      <Appbar />
      <main className="home-page__main main">
        <section className="home-page__copy">
          {/* heading */}
          <h1 className="headline">Connect, Share, Enjoy your time!</h1>
          <p className="subheadline">
            Eerkel is amazing social media app to make new friends, connect with
            family, share ideas, and find new inspirations!
          </p>
          <div className="home-page__btn-wrapper btn-wrapper">
            <a className="btn" href="/login">
              Get Started
            </a>
          </div>
        </section>

        <section className="home-page__hero-wrapper">
          {/* hero */}
          <img className="hero" src="./images/Home-Illustration.svg" alt="" />
        </section>
      </main>
      <footer className="home-page__footer footer">
        <p className="copyright-notice">Copyright Information Example</p>
      </footer>
    </div>
  );
};

export default Home;
