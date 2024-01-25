const express = require("express");
const router = express.Router();
const userprefersController = require("../controllers/userprefersController");

//* all paths start with 'api/userpreferences'

//* lets start with birthday first
router.get("/birthday/", userprefersController.indexBirthday);
router.post("/birthday", userprefersController.createBirthday);
router.get("/birthday/:id", userprefersController.getOneBirthday);
router.put("/birthday/:id", userprefersController.updateBirthday);

// router.put("/birthday/:id", userprefersController.updateBirthday);

//* income 
router.get("/income/", userprefersController.indexIncome);
router.post("/income/", userprefersController.createIncome);
//? question if path /income, and .create, will that be a problem for path /birthdate and .create?
//? or must be .createIncome and .createBirthdate?




//? question - not sure how to interact with server.js. should it be '/api/userpreferences'? Just tried.


module.exports = router;