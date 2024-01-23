const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController")

router.get("/", usersController.index);

//* putting /signup temporarily back. to discuss, if we want it on landing page OR another, or other way out
router.post("/signup", usersController.create);

module.exports = router;