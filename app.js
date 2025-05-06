const express = require ("express")
//const { books } = require("./database/connection");

const app = express()
//app.use(express.json())
require("./database/connection")











const port = 5000;
app.listen(port, () =>{
    console.log("Server started sucessfully at port " + port)
})
