import "./Signup.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import SignUpForm from "../../Components/SignUpForm";

function Signup() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="signup-section">
          <section className="signup-hero-section">
            <Hero />
          </section>
          <section className="signup-form-section">
            <SignUpForm />
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Signup;
