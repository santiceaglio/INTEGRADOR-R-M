require("dotenv").config();
const express = require("express");
const router = require("./routes");

const PORT = process.env.PORT || 3001;

const server = express();

server.use(router);

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});

http://localhost:3001/5
http://localhost:3001?id=5
