import "./Header.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  let headerClassList = "header";

  if (props.elevated) {
    headerClassList += " header--elevated";
  }

  const profileLink = props.hasProfile ? (
    <Link to="/profile" className="header-profile-image">
      <div className="header-profile-image__img">H</div>
    </Link>
  ) : null;

  return (
    <header className={headerClassList}>
      <nav className="nav">
        <Link to="/" className="logo">
          <img className="logo__img" src={logo} alt="Eerkel logo" />
        </Link>
        {profileLink}
      </nav>
    </header>
  );
}

export default Header;
