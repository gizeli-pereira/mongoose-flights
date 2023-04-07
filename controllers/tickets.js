const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
};


async function deleteTicket(req, res) {
    try {
      const ticket = await Ticket.findById(req.params.id).populate('flight').exec();
      await Ticket.findByIdAndDelete(req.params.id);
      console.log(`deleting: ${ticket}`);
      res.redirect(`/flights/${ticket.flight._id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  

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

