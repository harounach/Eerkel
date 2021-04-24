import React from "react";

const Login = () => {
  return (
    <div>
      <header className="login-page__header appbar">
        {/* logo */}
        <div className="appbar__section">
          <a className="logo" href="home.html">
            <img className="logo__img" src="./images/App-Icon.svg" alt="" />
          </a>
        </div>
      </header>
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
          <img
            className="login-page__hero hero"
            src="./images/Auth-Illustration.svg"
            alt=""
          />
          <p className="goto-auth">
            Don't have an account?
            <a className="goto-auth__link" href="./register.html">
              Register
            </a>
          </p>
        </section>
      </main>
      <footer className="login-page__footer footer">
        <p className="copyright-notice">Copyright Information Example</p>
      </footer>
    </div>
  );
};

export default Login;
