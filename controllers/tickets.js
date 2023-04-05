const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};



async function create(req, res) {
    const flightId = req.params.id;
    req.body.flight = flightId;
    
    try {
      const ticket = await Ticket.create(req.body);
      res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.log(err);
        res.render('tickets/new', {errorMsg: err.message});
    }
}

function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
}
