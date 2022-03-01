var express = require("express");
var router = express.Router();

var diseasesController = require("../controllers/diseasesController");

router.get("/", diseasesController.getAll);
router.get("/:id", diseasesController.getById);
router.post("/", diseasesController.create);
router.patch("/:id", diseasesController.update);

module.exports = router;
