import "./Signup.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Signup() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="signup-section">
          <section className="hero">Hero Image</section>
          <section className="form-section">
            <form action="">
              <label htmlFor="username">UserName</label>
              <input id="username" type="text" name="username" />
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
              <button type="submit">Sign up</button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Signup;
