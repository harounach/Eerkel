const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.route("/login").post(usersController.login);

router.route("/register").post(usersController.register);

router.route("/logout").post(usersController.logout);

router.route("/updateAccount").get(usersController.updateAccount);

router.route("/removeAccount").get(usersController.removeAccount);

module.exports = router;
