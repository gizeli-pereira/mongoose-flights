const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
   
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}

async function create(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    try {
        await Flight.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { title: 'Add flight', errorMsg: err.message });
      }
}

function newFlight(req, res) {
    res.render('flights/new');
}


