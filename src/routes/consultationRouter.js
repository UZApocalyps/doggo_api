var express = require('express');
var router = express.Router();

var consultationController = require('../controllers/consultationController');

router.get('/consultation', consultationController.getAll);

module.exports = router;
