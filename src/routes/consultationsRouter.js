var express = require("express");
var router = express.Router();

var consultationsController = require("../controllers/consultationsController");

router.get("/", consultationsController.getAll);
router.get("/:id", consultationsController.getById);
router.post("/", consultationsController.create);
router.patch("/:id", consultationsController.update);
router.delete("/:id", consultationsController.delete);

module.exports = router;
