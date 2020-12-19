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

module.exports = router;
