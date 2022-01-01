const route = require("express").Router();
const ticketDb = require("../db/ticketDb")

// ALL Routes
// Delete Tickets by username
route.delete("/u/:username" , (req, res) => {
    const username = req.params.username;

    const deletedTickets = ticketDb.deleteByUsername(username);

    res.send(deletedTickets)
})

// Update Tickets By username
route.put("/u/:username" , (req, res) => {
    const user = req.params.username
    const {username, price} = req.body
    const updatedTickets = ticketDb.updateByUsername(user, {
        updatedUsername: username, price
    })

    res.send(updatedTickets)
})

// Get Tickets by username
route.get('/u/:username', (req, res) => {
    const user = req.params.username;
    const getTickets = ticketDb.findByUser(user);
    res.send(getTickets)
})

// Delete Ticket By Id
route.delete("/t/:id", (req, res) => {
    const id = req.params.id;
    const deletedTicket = ticketDb.deleteById(id);

    res.send(deletedTicket)

})

// Update Ticket by Id
route.put("/t/:id", (req, res) => {
    const id = req.params.id;
    const {username, price} = req.body
    const updatedTicket = ticketDb.updateById(id, username, price)
    res.send(updatedTicket)
})

// Get Ticket By Id 
route.get("/t/:id", (req, res) => {
    const id = req.params.id;
    const ticket = ticketDb.findById(id);
    res.send(ticket);
})

// Get all ticket
route.get("/all", (req, res) => {
    const allTicket = ticketDb.find();
    console.log(allTicket)
    res.send(allTicket)
})
// Raffle Draw Ticket
route.get("/raffle/:winnerCount", (req, res) => {
    const winnerCount = req.params.winnerCount;
    const winners = ticketDb.raffledraw(winnerCount);
    res.send(winners);
})

// Buy Bulk Ticket 
route.post("/bulksell", (req, res) => {
    const {username, price, quantity} = req.body
    const bulkTicket = ticketDb.createBulkTicket(username, price, quantity);
    res.send(bulkTicket);
})

// Buy Single Ticket
route.post("/sell", (req, res) => {
    const {username, price} = req.body
    const newticket = ticketDb.createTicket(username, price)
    res.send(newticket)

})

// Module Exports
module.exports = route;