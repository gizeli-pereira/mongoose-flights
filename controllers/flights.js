const Flight = require('../models/flight');
// const util = require('util');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    // delete: deleteFlight
};

async function index(req, res) {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({ flight: flight._id})
    res.render('flights/show', {title: 'Flight Detail', flight, ticket });
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


// async function deleteFlight(req, res) {
//   try {
//     const flight = await util.promisify(Flight.findByIdAndDelete)(req.params.id);
//     res.redirect('/');
//   } catch (err) {
//     // Handle error
//     console.log(err);
//   }
// }
