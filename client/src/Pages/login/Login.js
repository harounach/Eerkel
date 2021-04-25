import React from "react";
import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

const Login = () => {
  return (
    <div>
      <Appbar />
      <main className="login-page__main main">
        <section className="login-page__form">
          <h1 className="title">Login</h1>
          <form className="form">
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
              <div className="login-page__btn-wrapper btn-wrapper">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="login-page__hero-wrapper">
          {/* hero */}
          <Hero src={heroImage} />
          <p className="goto-auth">
            Don't have an account?
            <a className="goto-auth__link" href="/register">
              Register
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
