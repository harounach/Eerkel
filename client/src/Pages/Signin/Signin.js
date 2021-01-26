import "./Signin.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import SignInForm from "../../Components/SignInForm";

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
            <SignInForm />
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Signin;
