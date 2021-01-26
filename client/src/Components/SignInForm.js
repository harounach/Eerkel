import "./SignInForm.scss";

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
    </form>
  );
}

export default SignInForm;
