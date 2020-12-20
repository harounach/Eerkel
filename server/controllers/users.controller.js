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
    res.json({ message: "Welcome to Eerkel app" });
  },
  signout: (req, res) => {
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
