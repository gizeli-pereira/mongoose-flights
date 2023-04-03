const Flight = require('../models/flight');

module.exports = {
    create
}

async function create(req, res) {

    const flight = await Flight.findById(req.params.id);
   
    const newDestination = {
        airport: req.body.airport,
        arrival: new Date(req.body.arrival)
    };
   
    flight.destinations.push(req.body);
   
    try {
        await flight.save()
       
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}