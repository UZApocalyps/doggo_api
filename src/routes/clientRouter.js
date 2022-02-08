var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');

/// Client ///

router.get('/client', client_controller.index);


module.exports = router;