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

const Register = () => {
  // register states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const usernameErrorClass = usernameError ? " form__error--show" : "";
  const emailErrorClass = emailError ? " form__error--show" : "";
  const passwordErrorClass = passwordError ? " form__error--show" : "";

  return (
    <div className="register-page__body">
      <Appbar classNames="register-page__header" />
      <main className="register-page__main main">
        <section className="register-page__form">
          <h1 className="title">Register</h1>
          <form className="form">
            <div className="form__section">
              <label className="form__label" htmlFor="username">
                Username
              </label>
              <input
                className="form__input-control"
                id="username"
                type="text"
                name="username"
              />
              <p className="form__error form__error--username">
                Username is invalid
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
              <label className="form__label" htmlFor="passwordConfirm">
                Password
              </label>
              <input
                className="form__input-control"
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
              />
              <p className="form__error form__error--passwordConfirm">
                password Confirmation is invalid
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
