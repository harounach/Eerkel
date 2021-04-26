import React from "react";
import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import LinkButton from "../../Components/button/LinkButton";

import Hero from "../../Components/hero/Hero";
import heroImage from "./Home-Illustration.svg";

const Home = () => {
  return (
    <div className="home-page__body">
      <Appbar classNames="home-page__header" />
      <main className="home-page__main main">
        <section className="home-page__copy">
          {/* heading */}
          <h1 className="headline">Connect, Share, Enjoy your time!</h1>
          <p className="subheadline">
            Eerkel is amazing social media app to make new friends, connect with
            family, share ideas, and find new inspirations!
          </p>
          <ButtonWrapper classNames="home-page__btn-wrapper">
            <LinkButton url="/login">Get Started</LinkButton>
          </ButtonWrapper>
        </section>

        <section className="home-page__hero-wrapper">
          {/* hero */}
          <Hero src={heroImage} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
