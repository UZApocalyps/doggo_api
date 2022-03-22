var express = require("express");
var router = express.Router();

var diseasesController = require("../controllers/diseasesController");

router.get("/diseases/", diseasesController.getAll);
router.get("/diseases/:id", diseasesController.getById);
router.post("/diseases/", diseasesController.create);
router.patch("/diseases/:id", diseasesController.update);
router.delete("/diseases/:id", diseasesController.delete);

module.exports = router;
