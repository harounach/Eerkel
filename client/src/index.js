import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./Pages/Welcome/Welcome";
import Signin from "./Pages/Signin/Signin";

ReactDOM.render(
  <React.StrictMode>
    <Signin />
  </React.StrictMode>,
  document.getElementById("root")
);
