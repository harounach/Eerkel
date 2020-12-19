const { Router } = require("express");
const router = Router();

router.route("/signin").get((req, res) => {
  res.json({ message: "Congratulations! user are signin" });
});

module.exports = router;
