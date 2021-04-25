import React from "react";
import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

const Register = () => {
  return (
    <div>
      <Appbar />
      <main className="register-page__main main">
        <section className="register-page__form">
          <h1 className="title">Register</h1>
          <form className="form">
            <div className="form__section">
              <label className="form__label" for="username">
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
              <label className="form__label" for="email">
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
              <label className="form__label" for="password">
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
              <label className="form__label" for="passwordConfirm">
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
              <div className="register-page__btn-wrapper btn-wrapper">
                <button className="btn" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="register-page__hero-wrapper">
          {/* hero */}
          <Hero src={heroImage} />
          <p className="goto-auth">
            Already have an account?
            <a className="goto-auth__link" href="login">
              Login
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
