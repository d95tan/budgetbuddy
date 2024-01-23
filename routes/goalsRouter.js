const express = require("express");
const router = express.Router();

const goalsController = require("../controllers/goalsController")

router.get("/", goalsController.index);
router.post("/", goalsController.create);

module.exports = router