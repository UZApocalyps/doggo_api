var express = require("express");
var router = express.Router();

var servicesController = require("../controllers/servicesController");

router.get("/", servicesController.getAll);
router.get("/:id", servicesController.getById);
router.post("/", servicesController.create);
router.patch("/:id", servicesController.update);
router.delete("/:id", servicesController.delete);

module.exports = router;
