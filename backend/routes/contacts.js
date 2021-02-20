const router = require("express").Router();

const { contactController } = require("../controllers");
const { isAuth } = require("../middleware");

router
  .route("/")
  .get(isAuth, contactController.getContacts)
  .post(isAuth, contactController.addContact)
  .delete(isAuth, contactController.deleteContact);

router.route("/pending").get(isAuth, contactController.getPendingContacts);

router.route("/request").get(isAuth, contactController.getRequestContacts);

module.exports = router;
