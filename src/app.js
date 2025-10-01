const express = require("express");

const app = express();
const {userAuthenticated} = require('./middlewares/admin.js')


app.get('/admin/user',userAuthenticated,(req,res) => {
res.send("User signed in successfully")
})

app.listen(3000, () => {
console.log("Server is successfully running on Port 3000")
})