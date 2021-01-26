import "./Welcome.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";

function Welcome() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="welcome-section">
          <section className="welcome-hero-section">
            <Hero />
          </section>
          <section className="welcome-text-section">
            <h1 className="headline">Connect, Share, Enjoy your time!</h1>
            <p className="subheadline">
              Eerkel is amazing social media app to make new friends, connect
              with family, share ideas, and find new inspirations!
            </p>
            <button className="signin-btn">Sign in</button>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Welcome;
