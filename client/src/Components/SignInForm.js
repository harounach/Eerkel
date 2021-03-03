import "./SignInForm.scss";

import { Link } from "react-router-dom";

function SignInForm(props) {
  return (
    <form className="signin-form" action="">
      <div className="signin-input-section">
        <label className="signin-input-label" htmlFor="email">
          Email
        </label>
        <input
          className="signin-input-control"
          id="email"
          type="text"
          name="email"
        />
      </div>
      <div className="signin-input-section">
        <label className="signin-input-label" htmlFor="password">
          Password
        </label>
        <input
          className="signin-input-control"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div className="signin-form-btn-section">
        <button className="signin-form-btn" type="submit">
          Sign in
        </button>
      </div>
      <p className="signin-form__signup-link-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signin-form__signup-link">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default SignInForm;
