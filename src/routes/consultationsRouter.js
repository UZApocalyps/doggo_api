var express = require("express");
var router = express.Router();

var consultationsController = require("../controllers/consultationsController");

router.get("/consultations", consultationsController.getAll);
router.get("/consultations/:id", consultationsController.getById);
router.post("/consultations", consultationsController.create);

module.exports = router;
