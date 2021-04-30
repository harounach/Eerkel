import React, { useState } from "react";
import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import Button from "../../Components/button/Button";
import LinkTextButton from "../../Components/button/LinkTextButton";

import ChatApi from "../../api/ChatApi";
import FormUtils from "../../utils/FormUtils";

/**
 * @typedef {Object} ErrorEntry
 * @property {string} msg
 * @property {string} location
 * @property {string} param
 * @property {string} value
 */

const Register = () => {
  // register states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [
    passwordConfirmErrorMessage,
    setPasswordConfirmErrorMessage,
  ] = useState("");

  /**
   * Submit register data when clicking register button
   */
  const submitHandler = function (evt) {
    evt.preventDefault();
    console.log("data submitted!");
    ChatApi.register(username, email, password, passwordConfirm)
      .then((response) => {
        console.log(response.data);
        FormUtils.hasError(response.data);
        if (FormUtils.hasError(response.data)) {
          resetErrors();
          handleErrors(response.data["errors"]);
        } else {
          resetErrors();
          /* TODO: handle login */
        }
      })
      .catch((err) => console.log(err));
  };

  /**
   * Reset error messages
   */
  const resetErrors = function () {
    setUsernameErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setPasswordConfirmErrorMessage("");
  };

  /**
   * Extract errors
   * @param {Array<ErrorEntry>} errorsData
   */
  const handleErrors = function (errorsData) {
    errorsData.forEach((errorEntry) => {
      if (errorEntry.param === "username") {
        setUsernameErrorMessage(errorEntry.msg);
      }
      if (errorEntry.param === "email") {
        setEmailErrorMessage(errorEntry.msg);
      }
      if (errorEntry.param === "password") {
        setPasswordErrorMessage(errorEntry.msg);
      }
      if (errorEntry.param === "passwordConfirm") {
        setPasswordConfirmErrorMessage(errorEntry.msg);
      }
    });
  };

  return (
    <div className="register-page__body">
      <Appbar classNames="register-page__header" />
      <main className="register-page__main main">
        <section className="register-page__form">
          <h1 className="title">Register</h1>
          <form className="form" onSubmit={submitHandler}>
            <div className="form__section">
              <label className="form__label" htmlFor="username">
                Username
              </label>
              <input
                className="form__input-control"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p
                className={
                  "form__error form__error--username" +
                  FormUtils.toggleErrorClass(usernameErrorMessage)
                }
              >
                {usernameErrorMessage}
              </p>
            </div>

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
              <p
                className={
                  "form__error form__error--email" +
                  FormUtils.toggleErrorClass(emailErrorMessage)
                }
              >
                {emailErrorMessage}
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
                  "form__error form__error--password" +
                  FormUtils.toggleErrorClass(passwordErrorMessage)
                }
              >
                {passwordErrorMessage}
              </p>
            </div>

            <div className="form__section">
              <label className="form__label" htmlFor="passwordConfirm">
                Password
              </label>
              <input
                className="form__input-control"
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <p
                className={
                  "form__error form__error--passwordConfirm" +
                  FormUtils.toggleErrorClass(passwordConfirmErrorMessage)
                }
              >
                {passwordConfirmErrorMessage}
              </p>
            </div>

            <div className="form__section">
              <ButtonWrapper classNames="register-page__btn-wrapper">
                <Button>Register</Button>
              </ButtonWrapper>
            </div>
          </form>
        </section>

        <section className="register-page__hero-wrapper">
          {/* hero */}
          <Hero classNames="register-page__hero" src={heroImage} />
          <p className="goto-auth">
            Already have an account?
            <LinkTextButton url="/login">Login</LinkTextButton>
          </p>
        </section>
      </main>
      <Footer classNames="register-page__footer" />
    </div>
  );
};

export default Register;
