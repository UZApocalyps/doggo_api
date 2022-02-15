var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');

/// Client ///

router.get('/', client_controller.clients);

router.get('/:id',client_controller.details);

router.put('/:id',client_controller.update);

router.post('/',client_controller.create);

router.delete('/:id',client_controller.delete);


module.exports = router;