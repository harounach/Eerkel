import React from "react";

const Profile = () => {
  return (
    <div>
      <header className="profile-page__header appbar appbar--space-between">
        {/* logo */}
        <div className="appbar__section">
          <a className="logo" href="home.html">
            <img className="logo__img" src="./images/App-Icon.svg" alt="" />
          </a>
        </div>

        {/* Profile dropdown */}
        <div className="appbar__section appbar__section--right">
          <div className="profile-dropdown">
            <div className="profile-dropdown__img-wrapper">
              <div className="profile-dropdown__img">
                <span className="profile-dropdown__name">J</span>
              </div>
            </div>
            <div className="profile-dropdown__content">
              <a href="/profile" className="profile-dropdown__link">
                Profile
              </a>
              <a href="/logout" className="profile-dropdown__link">
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="profile-page__main main">
        <section className="profile-page__form">
          <h1 className="title">Profile</h1>
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
                disabled
              />
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
              <div className="profile-page__btn-wrapper btn-wrapper">
                <button className="btn" type="submit">
                  Update
                </button>
                <button className="btn" type="submit">
                  Remove
                </button>
              </div>
            </div>
            <div className="form__section">
              <p className="form__message">Update Successful</p>
            </div>
          </form>
        </section>
        <section className="profile-page__hero-wrapper">
          <img
            className="profile-page__hero hero"
            src="./images/Profile-Illustration.svg"
            alt=""
          />
        </section>
      </main>
      <footer className="profile-page__footer footer">
        <p className="copyright-notice">Copyright Information Example</p>
      </footer>
    </div>
  );
};

export default Profile;
