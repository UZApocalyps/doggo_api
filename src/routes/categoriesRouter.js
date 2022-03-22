var express = require("express");
var router = express.Router();

var categoriesController = require("../controllers/categoriesController");

router.get("/categories/", categoriesController.categories);
router.get("/categories/:id", categoriesController.details);
router.post("/categories/", categoriesController.create);
router.patch("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);

module.exports = router;
