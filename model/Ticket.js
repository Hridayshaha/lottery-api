// Module Import
const shortid = require('shortid');

// Ticket Model
/**
 * @param {string} username
 * @param {number} price
 * 
 */
class Ticket {
    constructor(username, price){
        this.id = shortid.generate();
        this.username = username;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

// Database model exported
module.exports = Ticket;