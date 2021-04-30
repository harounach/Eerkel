import React, { useState } from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import Button from "../../Components/button/Button";
import LinkTextButton from "../../Components/button/LinkTextButton";

import ChatApi from "../../api/ChatApi";

/**
 * @typedef {Object} ErrorEntry
 * @property {string} msg
 * @property {string} location
 * @property {string} param
 * @property {string} value
 */

const Login = (props) => {
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailErrorClass = emailError ? " form__error--show" : "";
  const passwordErrorClass = passwordError ? " form__error--show" : "";

  const submitHandler = function (evt) {
    evt.preventDefault();
    console.log("data submitted!");
    ChatApi.login(email, password)
      .then((response) => {
        if (hasError(response.data)) {
          handleErrors(response.data["errors"]);
        } else {
          resetErrors();
        }
      })
      .catch((err) => console.log(err));
  };

  /* Check if this is errors data  */
  const hasError = function (data) {
    return data.hasOwnProperty("errors");
  };

  const resetErrors = function () {
    setEmailError("");
    setPasswordError("");
  };

  /**
   * Extract errors
   * @param {Array<ErrorEntry>} errorsData
   */
  const handleErrors = function (errorsData) {
    errorsData.forEach((errorEntry) => {
      if (errorEntry.param === "email") {
        setEmailError(errorEntry.msg);
      }
      if (errorEntry.param === "password") {
        setPasswordError(errorEntry.msg);
      }
    });
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={"form__error form__error--email" + emailErrorClass}>
                {emailError}
              </p>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                className={
                  "form__error form__error--password" + passwordErrorClass
                }
              >
                {passwordError}
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
