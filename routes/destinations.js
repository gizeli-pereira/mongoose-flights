const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/flights');

//All routs starts with /

router.post('/flights/:id/destinations', destinationsCtrl.create)