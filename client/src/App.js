import "./App.scss";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import FriendsList from "./Pages/FriendsList";
import Chat from "./Pages/Chat";

function App() {
  return (
    <Router>
      {" "}
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/friendslist" component={FriendsList} />
        <Route path="/chat" component={Chat} />
      </Fragment>
    </Router>
  );
}

export default App;
