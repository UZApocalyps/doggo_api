var express = require("express");
var router = express.Router();

var consultationsController = require("../controllers/consultationsController");

router.get("/consultations/", consultationsController.consultations);
router.get("/consultations/:id", consultationsController.details);
router.post("/consultations/", consultationsController.create);
router.patch("/consultations/:id", consultationsController.update);
router.delete("/consultations/:id", consultationsController.delete);

module.exports = router;
