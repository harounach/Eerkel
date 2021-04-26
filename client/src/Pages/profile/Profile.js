import React from "react";

import Appbar from "../../Components/appbar/Appbar";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/hero/Hero";
import heroImage from "./Profile-Illustration.svg";

import Form from "../../Components/form/From";
import FormSection from "../../Components/form/FormSection";

import ButtonWrapper from "../../Components/button/ButtonWrapper";
import Button from "../../Components/button/Button";

const Profile = () => {
  return (
    <div className="profile-page__body">
      <Appbar />
      <main className="profile-page__main main">
        <section className="profile-page__form">
          <h1 className="title">Profile</h1>
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

            <FormSection className="form__section">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__input-control"
                id="email"
                type="text"
                name="email"
                disabled
              />
            </FormSection>

            <FormSection className="form__section">
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

            <FormSection className="form__section">
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

            <FormSection className="form__section">
              <ButtonWrapper classNames="profile-page__btn-wrapper">
                <Button>Update</Button>
                <Button>Remove</Button>
              </ButtonWrapper>
            </FormSection>
            <FormSection className="form__section">
              <p className="form__message">Update Successful</p>
            </FormSection>
          </Form>
        </section>
        <section className="profile-page__hero-wrapper">
          <Hero classNames="profile-page__hero" src={heroImage} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
