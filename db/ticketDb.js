// Module Import
const Ticket = require("../model/Ticket")

class TicketDb {
    constructor(){
        this.tickets = [];
    }
    /** 
     * Create new ticket
     * @param {string} username
     * @param {number} price
     * @returns {object} ticket
     * Done
     */ 
    createTicket(username, price){
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /** 
     * Create new ticket
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {object} Bulk Tickets Array Object
     * Done
     */ 
    createBulkTicket(username, price, quantity){
        let bulkTicket = []
        for(let i = 1; i <= quantity; i++){
            const ticket = new Ticket(username, price);
            this.tickets.push(ticket);
            bulkTicket.push(ticket);
        }
        return bulkTicket;
    }

    /** 
     * Find single ticket by id
     * @param {string} id
     * @returns {object} Filter object with id
     * Done
     */ 
    findById(id){
        const ticket = this.tickets.filter((ticket) => ticket.id === id)
        return ticket[0];
    }


        /** 
     * Find tickets by username
     * @param {string} id
     * @returns {object} Filter object with id
     * Done
     */ 
        findByUser(user){
            const ticket = this.tickets.filter((ticket) => ticket.username === user)
            return ticket;
        }

    /** 
     * Find all tickets
     * @returns {object} All the object data
     * Done
     */ 
    find(){
        return this.tickets;
    }

    /** 
     * Create new ticket
     * @param {string} id
     * @param {string} username
     * @param {number} price
     * @returns {object} Updated object
     */ 
    updateById(id, username, price){
        let ticket = this.findById(id);
        ticket.username = username ? username : ticket.username;
        ticket.price = price ? price : ticket.price;
        ticket.updatedAt = new Date();
        
        return ticket;
    }

    /** 
     * Updated all ticket by usernames
     * @param {string} username
     * @object {updatedUsername, price}
     * @returns {object} All updated object data
     * Done
     */ 
    updateByUsername(username , {updatedUsername, price}){
        const ticket = this.tickets.filter((ticket) => ticket.username === username)
        const updatedTickets = [];
        ticket.map((ticket) => {
            ticket.username = updatedUsername ? updatedUsername : ticket.username;
            ticket.price = price ? price : ticket.price;
            ticket.updatedAt = new Date()
            updatedTickets.push(ticket);

        })

        return updatedTickets;


    }

    /** 
     * Delete ticket by id
     * @param {string} id
     * @returns {object} Deleted object
     */
    deleteById(id){
        const ticket = this.findById(id);
        const index = this.tickets.findIndex(items => items.id === ticket.id);

        if(index !== -1){
            this.tickets.splice(index , 1);
        }

        return ticket;
        
    }

    /** 
     * Delete ticket by id
     * @param {string} username
     * @returns {object} Deleted object
     */  
    deleteByUsername(username) {
        const ticketObject = this.findByUser(username);

        ticketObject.map(ticket => {
            const index  = this.tickets.findIndex(items => items.id === ticket.id);
            if(index !== -1){
                this.tickets.splice(index, 1);
            }
        })

        return ticketObject;

    }

    /** 
     * Delete ticket by id
     * @param {number} winnerCount
     * @returns {object} winners
     */  
    raffledraw(winnerCount){
        winnerCount = winnerCount || 1;
        let winnerIndexes = new Array(winnerCount);

        let index = 0;
        while(index < winnerCount){
            let winnerIndex = Math.floor(Math.random() * this.tickets.length);
            
            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex; 
                continue;
            }
        
        }
        
        
        const winners = winnerIndexes.map(index => this.tickets[index])
        return winners;
    }
}

// We need singleton patern thus why we just export the object.
const ticketDb = new TicketDb();

// Module Export
module.exports = ticketDb;