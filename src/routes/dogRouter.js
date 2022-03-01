var express = require('express');
var router = express.Router();

// Require controller modules.
var dog_controller = require('../controllers/dogController');

/// Client ///

router.get('/', dog_controller.dogs);

router.get('/:id',dog_controller.details);

router.put('/:id',dog_controller.update);

router.post('/',dog_controller.create);

router.delete('/:id',dog_controller.delete);


module.exports = router;