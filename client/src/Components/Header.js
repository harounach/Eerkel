import "./Header.scss";
import { Fragment } from "react";
import logo from "./logo.svg";

function Header(props) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img className="logo__img" src={logo} alt="Eerkel logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
