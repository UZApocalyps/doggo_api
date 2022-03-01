var express = require("express");
var router = express.Router();

var diseasesController = require("../controllers/diseasesController");

router.get("/", diseasesController.getAll);

module.exports = router;
