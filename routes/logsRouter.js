const express = require("express");
const router = express.Router();

const logsController = require("../controllers/logsController")

router.get("/", logsController.index);
router.post("/", logsController.create);

module.exports = router