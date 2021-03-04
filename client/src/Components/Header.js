import "./Header.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  let headerClassList = "header";

  if (props.elevated) {
    headerClassList += " header--elevated";
  }

  return (
    <header className={headerClassList}>
      <nav className="nav">
        <Link to="/" className="logo">
          <img className="logo__img" src={logo} alt="Eerkel logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
