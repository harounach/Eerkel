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

const Register = () => {
  return (
    <div className="register-page__body">
      <Appbar classNames="register-page__header" />
      <main className="register-page__main main">
        <section className="register-page__form">
          <h1 className="title">Register</h1>
          <Form>
            <FormSection>
              <label className="form__label" htmlFor="username">
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
            </FormSection>

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
              <label className="form__label" htmlFor="passwordConfirm">
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
            </FormSection>

            <FormSection>
              <ButtonWrapper classNames="register-page__btn-wrapper">
                <Button>Register</Button>
              </ButtonWrapper>
            </FormSection>
          </Form>
        </section>

        <section className="register-page__hero-wrapper">
          {/* hero */}
          <Hero classNames="register-page__hero" src={heroImage} />
          <p className="goto-auth">
            Already have an account?
            <LinkTextButton url="/login">Login</LinkTextButton>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
