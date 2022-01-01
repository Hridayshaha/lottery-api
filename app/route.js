// Module Import 
const route = require("express").Router()


// Ticket Route Integration
route.use("/api/v1/tickets", require("../routes/ticketRoute"));


// Health Route
route.get("/health", (req, res) => {
    throw new Error("Mani")
    res.status(200).json({
        success: true,
    })
})



// Module Export
module.exports = route;