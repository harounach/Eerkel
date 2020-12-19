const { Router } = require("express");
const router = Router();

router.route("/signin").get((req, res) => {
  res.json({ message: "Congratulations! user are signin" });
});

router.route("/signup").get((req, res) => {
  res.json({ message: "Welcome to Eerkel app" });
});

router.route("/signout").get((req, res) => {
  res.json({ message: "Signed out!" });
});

router.route("/updateAccount").get((req, res) => {
  res.json({ message: "Your account has been updated" });
});

module.exports = router;
