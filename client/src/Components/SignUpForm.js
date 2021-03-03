import "./SignUpForm.scss";

import { Link } from "react-router-dom";

function SignUpForm(props) {
  return (
    <form className="signup-form" action="">
      {/* UserName */}
      <div className="signup-input-section">
        <label className="signup-input-label" htmlFor="username">
          UserName
        </label>
        <input
          className="signup-input-control"
          id="username"
          type="text"
          name="username"
        />
      </div>
      {/* Email */}
      <div className="signup-input-section">
        <label className="signup-input-label" htmlFor="email">
          Email
        </label>
        <input
          className="signup-input-control"
          id="email"
          type="text"
          name="email"
        />
      </div>
      <div className="signup-input-section">
        <label className="signup-input-label" htmlFor="password">
          Password
        </label>
        <input
          className="signup-input-control"
          id="password"
          type="password"
          name="password"
        />
      </div>
      {/* Verify Password */}
      <div className="signup-input-section">
        <label className="signup-input-label" htmlFor="passwordConfirmation">
          Password
        </label>
        <input
          className="signup-input-control"
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
        />
      </div>
      <div className="signup-form-btn-section">
        <button className="signup-form-btn" type="submit">
          Sign Up
        </button>
      </div>
      <p className="signup-form__signin-link-text">
        Already have an account?{" "}
        <Link to="/signin" className="signup-form__signin-link">
          Sign In
        </Link>
      </p>
    </form>
  );
}

export default SignUpForm;
