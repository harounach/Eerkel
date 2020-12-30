import "./Signin.scss";
import { Fragment } from "react";

function Signin() {
  return (
    <Fragment className="content">
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo</div>
        </nav>
      </header>
      <main className="main">
        <section className="signin-section">
          <section className="hero">Hero Image</section>
          <section className="form-section">
            <form action="">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
              <button type="submit">Sign in</button>
            </form>
          </section>
        </section>
      </main>
      <footer className="footer">Footer</footer>
    </Fragment>
  );
}

export default Signin;
