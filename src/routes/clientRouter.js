var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');

/// Client ///

router.get('/clients/', client_controller.clients);

router.get('/clients/:id',client_controller.details);

router.put('/clients/:id',client_controller.update);

router.post('/clients/',client_controller.create);

router.delete('/clients/:id',client_controller.delete);


module.exports = router;