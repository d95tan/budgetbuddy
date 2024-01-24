const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController")

router.get("/", usersController.index);

//* putting /signup temporarily back. to discuss, if we want it on landing page OR another, or other way out
router.post("/", usersController.create);

//* POST /api/users/login (log in )
router.post('/login', usersController.login);

//* GET /api/users/check-token  (check token)
router.get('/check-token', usersController.checkToken);


module.exports = router;