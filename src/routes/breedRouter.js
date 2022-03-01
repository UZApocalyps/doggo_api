var express = require('express');
var router = express.Router();

// Require controller modules.
var breed_controller = require('../controllers/breedController');

/// Client ///

router.get('/', breed_controller.breeds);

router.get('/:id',breed_controller.details);

router.put('/:id',breed_controller.update);

router.post('/',breed_controller.create);

router.delete('/:id',breed_controller.delete);


module.exports = router;