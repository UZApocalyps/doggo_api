var express = require("express");
var router = express.Router();

var servicesController = require("../controllers/servicesController");

router.get("/services/", servicesController.services);
router.get("/services/:id", servicesController.details);
router.post("/services/", servicesController.create);
router.patch("/services/:id", servicesController.update);
router.delete("/services/:id", servicesController.delete);

module.exports = router;
