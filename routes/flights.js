var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

//All routes ALREADY start with '/flights'

// //GET flights
router.get('/', flightsCtrl.index);

//GET /flights/new
router.get('/new', flightsCtrl.new);

//GET /flights/:id show
router.get('/:id', flightsCtrl.show);

//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
