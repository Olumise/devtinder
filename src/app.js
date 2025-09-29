const express = require("express");

const app = express();

app.get('/',(req,res) => {
    res.send("This is the Homepage")
})

app.get('/about-us',(req,res) => {
    res.send("This is the About Us Page")
})

app.get('/samples',(req,res) => {
    res.send("This is the Samples Page")
})

app.listen(3000, () => {
console.log("Server is successfully running on Port 3000")
})