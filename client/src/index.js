import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./Pages/Welcome/Welcome";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";
import FriendList from "./Pages/FriendList/FriendList";
import Home from "./Pages/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
