const Utils = require("../utils/utils");
const validator = require("validator").default;
const usersDAO = require("../dao/usersDAO");

const usersController = {
  signin: (req, res) => {
    let userObj = {};
    const errors = [];

    const { email, password } = req.body;

    // 01- check email is not null
    // 02- check password is not null
    // 03- validate email
    // 04- validate password

    if (!email) {
      errors.push("Email is required");
    }

    if (!password) {
      errors.push("Password is required");
    }

    if (!validator.isEmail(email)) {
      errors.push("Invalid Email");
    }

    if (!(password.length >= 6 && password.length <= 15)) {
      errors.push("Password must be 6-15 characters long");
    }

    if (errors.length > 0) {
      res.send({ error: errors });
    } else {
      userObj["email"] = email;
      userObj["password"] = password;
      res.json({ message: "Congratulations! user are signin" });
    }
  },
  signup: (req, res) => {
    let userObj = {};
    const errors = [];

    const { username, email, password, verifyPassword } = req.body;

    // 01- check username is not null
    // 02- check email is not null
    // 03- check password is not null
    // 04- check verifyPassword is not null
    // 05- validate email
    // 06- validate password
    // 07- check equality of password and verifyPassword

    if (!username) {
      errors.push("Username is required");
    }

    if (!email) {
      errors.push("Email is required");
    }

    if (!password) {
      errors.push("Password is required");
    }

    if (!verifyPassword) {
      errors.push("Reenter password");
    }

    if (!validator.isEmail(email)) {
      errors.push("Invalid Email");
    }

    if (!(password.length >= 6 && password.length <= 15)) {
      errors.push("Password must be 6-15 characters long");
    }

    if (!validator.equals(password, verifyPassword)) {
      errors.push("Passwords must be the same");
    }

    if (errors.length > 0) {
      res.json({ error: errors });
    } else {
      // we cover all scenarios, now we can create a user
      userObj["username"] = username;
      userObj["email"] = email;
      userObj["password"] = password;

      // add the user to the database
      usersDAO
        .createUser(userObj)
        .then((newUser) => {
          res.json({ message: "Welcome to Eerkel app" });
        })
        .catch((err) => {
          console.error(err);
          res.json({ error: "Something went wrong" });
        });
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
