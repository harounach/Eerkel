const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.route("/signin").get(usersController.signin);

router.route("/signup").get(usersController.signup);

router.route("/signout").get(usersController.signout);

router.route("/updateAccount").get(usersController.updateAccount);

router.route("/removeAccount").get(usersController.removeAccount);

module.exports = router;
