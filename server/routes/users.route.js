const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.route("/signin").post(usersController.signinImproved);

router.route("/signup").post(usersController.signup);

router.route("/signout").post(usersController.signout);

router.route("/updateAccount").get(usersController.updateAccount);

router.route("/removeAccount").get(usersController.removeAccount);

module.exports = router;
