import React from "react";
import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Auth-Illustration.svg";

import Form from "../../Components/form/From";
import FormSection from "../../Components/form/FormSection";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import Button from "../../Components/button/Button";
import LinkTextButton from "../../Components/button/LinkTextButton";

const Login = () => {
  return (
    <div>
      <Appbar />
      <main className="login-page__main main">
        <section className="login-page__form">
          <h1 className="title">Login</h1>
          <Form>
            <FormSection>
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
            </FormSection>

            <FormSection>
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
            </FormSection>

            <FormSection>
              <ButtonWrapper classNames="login-page__btn-wrapper">
                <Button>Login</Button>
              </ButtonWrapper>
            </FormSection>
          </Form>
        </section>
        <section className="login-page__hero-wrapper">
          {/* hero */}
          <Hero classNames="login-page__hero" src={heroImage} />
          <p className="goto-auth">
            Don't have an account?
            <LinkTextButton url="/register">Register</LinkTextButton>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
