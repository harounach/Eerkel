import "./Profile.scss";
import { Fragment } from "react";

function Profile() {
  return (
    <Fragment>
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo for Profile</div>
        </nav>
      </header>
      <main className="main">
        <section className="signup-section">
          <section className="hero">Hero Image</section>
          <section className="form-section">
            <form action="">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
              <label htmlFor="verify-password">Password</label>
              <input
                id="verify-password"
                type="password"
                name="verify-password"
              />
              <button type="submit">Update</button>
              <button>Remove</button>
            </form>
          </section>
        </section>
      </main>
      <footer className="footer">Footer</footer>
    </Fragment>
  );
}

export default Profile;
