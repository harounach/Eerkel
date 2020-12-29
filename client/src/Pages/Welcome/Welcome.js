import "./Welcome.scss";

function Welcome() {
  return (
    <div className="content">
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo</div>
        </nav>
      </header>
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
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Welcome;
