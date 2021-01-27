import "./ProfileForm.scss";

function ProfileForm(props) {
  return (
    <form className="profile-form" action="">
      {/* Email */}
      <div className="profile-input-section">
        <label className="profile-input-label" htmlFor="email">
          Email
        </label>
        <input
          className="profile-input-control"
          id="email"
          type="text"
          name="email"
        />
      </div>
      {/* Password */}
      <div className="profile-input-section">
        <label className="profile-input-label" htmlFor="password">
          Password
        </label>
        <input
          className="profile-input-control"
          id="password"
          type="password"
          name="password"
        />
      </div>
      {/* Verify Password */}
      <div className="profile-input-section">
        <label className="profile-input-label" htmlFor="password">
          Password
        </label>
        <input
          className="profile-input-control"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <div className="profile-form-btn-section">
        <button className="profile-form-btn" type="submit">
          Update
        </button>
        <button
          className="profile-form-btn profile-form-btn--remove"
          type="submit"
        >
          Remove
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
