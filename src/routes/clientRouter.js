var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');

/// Client ///

router.get('/client', client_controller.clients);

router.get('/client/:id',client_controller.details);

router.put('/client/:id',client_controller.update);

router.post('/client/',client_controller.create);

router.delete('/client/:id',client_controller.delete);


module.exports = router;