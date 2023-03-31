const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
   
};

async function index(req, res) {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
}

async function create(req, res) {
    
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {errorMsg: err.message});
    }
}

function newFlight(req, res) {
    res.render('flights/new');
}


