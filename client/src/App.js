import "./App.scss";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
import FriendList from "./Pages/FriendList/FriendList";

function App() {
  return (
    <Router>
      {" "}
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/friendlist" component={FriendList} />
      </Fragment>
    </Router>
  );
}

export default App;
