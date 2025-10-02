const express = require("express");

const app = express();
const {mongoDB} = require('./config/database')
const User = require('./models/user')

app.use(express.json())

app.post('/signup',async (req,res) => {
const user = new User(req.body)

try {
    await user.save()
    res.send({
        "Message" : "User saved successfully",
        "New User" : req.body
     })
} catch (err) {
res.status(400).send("Error saving User: " + err.message);
}

})

mongoDB().then(() => {

    console.log('Database connected successfully')
    app.listen(3000, () => {
    console.log("Server is successfully running on Port 3000")
})

}).catch((err) => {

console.log('Database connection failed')
console.log('Error Message: ' + err.message)

})

