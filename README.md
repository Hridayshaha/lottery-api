

# Lottery Api
This is a simple lottery application with some common CRUD operation.

##  API ROUTE
- /api/vi/tickets

### All Routes
#### POST ROUTE
- Sell Ticket : ***/sell*** - POST single object with 2 params {username, price}
- Sell Bulk Ticket : ***/bulk*** - POST bulk tickets with 3 param {username, price, quantity}

#### GET ROUTE
- All Ticket : ***/all***
- Get Ticket By Id : ***/t/:id***
- Get Ticket By Username : ***/u/:username***
- Raffle Draw Winner : ***/raffle/:winnerCount*** {WinnerCount the numbers of winners}

#### PUT ROUTE
- Update Ticket By Id : ***/t/:id*** {Updated Username and price object}
- Update Ticket By Username : ***/u/:username*** {Updated Username, price object}

#### DELETE ROUTE
- Delete Ticket By Id : ***/t/:id*** 
- Delete Ticket By Username : ***/u/:username*** 

## Ticket Data Model
- number (Unique)
- username (String)
- price (Number)
- timestamp (String)

## Features
- Sell Lottery Ticket
- Update Lottery Ticket
- Delete Lottery Ticket
- Get Single Lottery Ticket By Id
- Get All lottery tickets
- Get Ticket By username
- Sell Bulk Lottery Tickets
- Update Bulk Lottery tickets by username
- Delete Lottery tickets by username
- Raffle Draw




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`



## Start The Project

To run proejct, run the following command

```bash
  npm start
```


## Tech Stack

**Server:** Node, Express

## Contact

Hriday Shaha - [@shaha_hriday](https://twitter.com/shaha_hriday) - contact.hridayshaha@gmail.com
[Linkedin](https://www.linkedin.com/in/hridayshaha/)
[Facebook](https://www.facebook.com/hriday.shaha.official)
[Instagram](https://www.instagram.com/hridayshaha_programmer/)


### Happy Coding