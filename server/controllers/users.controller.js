const Utils = require("../utils/utils");

const usersController = {
  signin: (req, res) => {
    let userObj = {};
    const email = req.body["email"];
    const password = req.body["password"];
    if (!email) {
      res.json({ error: "Email is required" });
    } else if (!password) {
      res.json({ error: "Password is required" });
    } else {
      if (!Utils.validateEmail(email)) {
        res.json({ error: "Invalid Email" });
      } else if (!Utils.validPassword(password)) {
        res.json({ error: "Password must be 6-15 characters long" });
      } else {
        userObj["email"] = email;
        userObj["password"] = password;
        res.json({ message: "Congratulations! user are signin" });
      }
    }
  },
  signup: (req, res) => {
    let userObj = {};
    const username = req.body["username"];
    const email = req.body["email"];
    const password = req.body["password"];
    const vertifyPassword = req.body["verify-password"];
    if (!username) {
      res.json({ error: "Username is required" });
    } else if (!email) {
      res.json({ error: "Email is required" });
    } else if (!password) {
      res.json({ error: "Password is required" });
    } else if (!vertifyPassword) {
      res.json({ error: "Reenter password" });
    } else {
      if (!Utils.validPassword(password)) {
        res.json({ error: "Password must be 6-15 characters long" });
      } else if (password !== vertifyPassword) {
        res.json({ error: "Password must be the same" });
      } else {
        // we cover all scenarios, now we can create a user
        userObj["username"] = username;
        userObj["email"] = email;
        userObj["password"] = password;
        res.json({ message: "Welcome to Eerkel app" });
      }
    }
  },
  signout: (req, res) => {
    // Sign the user out and redirect to welocme home page
    res.json({ message: "Signed out!" });
  },
  updateAccount: (req, res) => {
    res.json({ message: "Your account has been updated" });
  },
  removeAccount: (req, res) => {
    res.json({ message: "Your account has been removed" });
  },
};

module.exports = usersController;
