var express = require('express');
var router = express.Router();

// Require controller modules.
var breed_controller = require('../controllers/breedController');

/// Client ///

router.get('/breeds/', breed_controller.breeds);

router.get('/breeds/:id',breed_controller.details);

router.put('/breeds/:id',breed_controller.update);

router.post('/breeds/',breed_controller.create);

router.delete('/breeds/:id',breed_controller.delete);


module.exports = router;