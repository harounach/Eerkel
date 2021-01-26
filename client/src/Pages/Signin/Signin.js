import "./Signin.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";

function Signin() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="signin-section">
          <section className="signin-hero-section">
            <Hero />
          </section>
          <section className="signin-form-section">
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
      <Footer />
    </Fragment>
  );
}

export default Signin;
