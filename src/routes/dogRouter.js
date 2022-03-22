var express = require('express');
var router = express.Router();

// Require controller modules.
var dog_controller = require('../controllers/dogController');

/// Client ///

router.get('/dogs/', dog_controller.dogs);

router.get('/dogs/:id',dog_controller.details);

router.put('/dogs/:id',dog_controller.update);

router.post('/dogs/',dog_controller.create);

router.delete('/dogs/:id',dog_controller.delete);


module.exports = router;