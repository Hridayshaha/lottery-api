// Module Import 
const http = require('http');
const app = require('./app/app')

// Server configuration
const PORT = process.env.PORT || 8080;
const server = http.createServer(app)
server.listen(8080, ()=> {
    console.log("Server listening on port " + PORT)
})