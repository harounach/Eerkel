const Utils = require("../utils/utils");
const validator = require("validator").default;
const usersDAO = require("../dao/usersDAO");
const passwordUtils = require("../utils/passwordUtils");

const { body, validationResult } = require("express-validator");

// Login endpoint
exports.login = [
  // Validate and sanitize fields.

  // Validate & sanitize username
  body("email", "Email is invalid").trim().isEmail().escape(),
  // Validate & sanitize password
  body("password", "Password must be 6-15 characters long")
    .trim()
    .isLength({ min: 6, max: 15 })
    .escape(),

  // return json
  function (req, res, next) {
    const errors = validationResult(req);

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Data is valid, sign the user in

      res.json({ message: "Congratulations! you are logged in" });
    }
  },

  // Passport here
];

// Sign In endpoint
// exports.signin = function (req, res, next) {
//   let userObj = {};
//   const errors = [];

//   const { email, password } = req.body;

//   // 01- check email is not null
//   // 02- check password is not null
//   // 03- validate email
//   // 04- validate password

//   if (!email) {
//     errors.push("Email is required");
//   }

//   if (!password) {
//     errors.push("Password is required");
//   }

//   if (!validator.isEmail(email)) {
//     errors.push("Invalid Email");
//   }

//   if (!(password.length >= 6 && password.length <= 15)) {
//     errors.push("Password must be 6-15 characters long");
//   }

//   if (errors.length > 0) {
//     res.send({ error: errors });
//   } else {
//     userObj["email"] = email;
//     userObj["password"] = password;
//     res.json({ message: "Congratulations! user are signin" });
//   }
// };

// Register endpoint
exports.register = [
  // Validate and sanitize fields.

  // Validate & sanitize username
  body("username", "Username must be more than 4 characters long")
    .trim()
    .isLength({ min: 4 })
    .escape(),
  // Validate & sanitize email
  body("email", "Email is invalid").trim().isEmail().escape(),
  // Validate & sanitize password
  body("password", "Password must be 6-15 characters long")
    .trim()
    .isLength({ min: 6, max: 15 })
    .escape(),
  // Validate passwordConfirmation
  body("passwordConfirm").custom((passwordConfirmation, { req }) => {
    const { password } = req.body;
    if (passwordConfirmation !== password) {
      throw new Error("Password confirmation does not match password");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),

  // Check if email already in use
  body("email").custom((email) => {
    return usersDAO.userExists(email).then((userExisted) => {
      if (userExisted) {
        return Promise.reject("Email already in use");
      }
    });
  }),

  // return json
  function (req, res, next) {
    const errors = validationResult(req);

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Data is valid, create the user in the database
      res.json({ message: "User created successfuly" });

      // const { username, email, password } = req.body;

      // const userObj = {};
      // userObj["username"] = username;
      // userObj["email"] = email;
      // userObj["password"] = password;

      // // Hash the password
      // passwordUtils
      //   .hashPassword(password)
      //   .then((hashedPassword) => {
      //     // add the user to the database
      //     userObj["password"] = hashedPassword;
      //     return usersDAO.createUser(userObj);
      //   })
      //   .then((newUser) => {
      //     res.json({ message: "User created successfully" });
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //     res.json({ error: "Server error" });
      //   });
    }
  },
];

// Logout endpoint
exports.logout = function (req, res, next) {
  // Sign the user out and redirect to welocme home page
  res.json({ message: "Signed out!" });
};

// Update account endpoint
exports.updateAccount = function (req, res, next) {
  res.json({ message: "Your account has been updated" });
};

// Remove account endpoint
exports.removeAccount = function (req, res, next) {
  res.json({ message: "Your account has been removed" });
};
