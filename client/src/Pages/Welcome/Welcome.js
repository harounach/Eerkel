import "./Welcome.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Welcome() {
  return (
    <div className="content">
      <Header />
      <main className="main">
        <section className="welcome-section">
          <section className="hero">Hero Image</section>
          <section className="text">
            <h1 className="headline">Connect, Share, Enjoy your time!</h1>
            <p className="para">
              Eerkel is amazing social media app to make new friends, connect
              with family, share ideas, and find new inspirations!
            </p>
            <button className="signin-btn">Sign in</button>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Welcome;
