const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

//All routs starts with /
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;