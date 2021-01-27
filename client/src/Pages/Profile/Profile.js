import "./Profile.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProfileForm from "../../Components/ProfileForm";

function Profile() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="profile-section">
          <section className="profile-image-section">
            <div className="profile-image">Set Profile Picture</div>
          </section>
          <section className="profile-form-section">
            <ProfileForm />
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Profile;
