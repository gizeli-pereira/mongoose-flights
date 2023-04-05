const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    delete: deleteFlight
};

async function index(req, res) {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Detail', flight });
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

function deleteFlight(req, res) {
    Flight.deleteOne(req.params.id);
    res.redirect('/flights');
}

