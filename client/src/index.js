import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./Pages/Welcome/Welcome";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";

ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById("root")
);
