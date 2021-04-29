import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import Button from "../../Components/button/Button";
import LinkTextButton from "../../Components/button/LinkTextButton";

import ChatApi from "../../api/ChatApi";

const Login = (props) => {
  const submitHandler = function (evt) {
    evt.preventDefault();
    console.log("data submitted!");
    ChatApi.login("", "fsfdfsdf")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page__body">
      <Appbar classNames="login-page__header" />
      <main className="login-page__main main">
        <section className="login-page__form">
          <h1 className="title">Login</h1>
          <form className="form" onSubmit={submitHandler}>
            <div className="form__section">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__input-control"
                id="email"
                type="text"
                name="email"
              />
              <p className="form__error form__error--email">Email is invalid</p>
            </div>

            <div className="form__section">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input-control"
                id="password"
                type="password"
                name="password"
              />
              <p className="form__error form__error--password">
                Password is invalid
              </p>
            </div>

            <div className="form__section">
              <ButtonWrapper classNames="login-page__btn-wrapper">
                <Button>Login</Button>
              </ButtonWrapper>
            </div>
          </form>
        </section>
        <section className="login-page__hero-wrapper">
          {/* hero */}
          <Hero classNames="login-page__hero" src={heroImage} />
          <p className="goto-auth">
            Don't have an account?
            <LinkTextButton url="/register">Register</LinkTextButton>
          </p>
        </section>
      </main>
      <Footer classNames="login-page__footer" />
    </div>
  );
};

export default Login;
