var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');

/// Client ///

router.get('/client', client_controller.clients);

router.get('/client/:id',client_controller.details);

router.post('/client/:id',client_controller.update);

router.post('/client/create',client_controller.create);

router.post('/client/:id/delete',client_controller.delete);


module.exports = router;