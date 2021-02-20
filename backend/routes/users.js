const router = require("express").Router();

const { userController } = require("../controllers");

router.route("/sign-up").post(userController.signUp);
router.route("/sign-in").post(userController.signIn);
router.route("/resend-verify").post(userController.resendVerify);
router.route("/verify-user/:token").post(userController.verifyUser);

module.exports = router;
