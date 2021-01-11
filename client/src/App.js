import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import FriendList from "./Pages/FriendList/FriendList";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Route path="/" exact component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/friendlist" component={FriendList} />
      </div>
    </Router>
  );
}

export default App;
