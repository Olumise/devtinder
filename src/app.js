const express = require("express");

const app = express();
const {mongoDB} = require('./config/database')
const User = require('./models/user')

app.post('/signup',async (req,res) => {
const user = new User({
firstName : 'Babatunde',
lastName : 'Adeoye',
gender: 'Male',
password: 'tolulope',
age: 19,
email: 'baba@gmail.com'
})

try {
    await user.save()
    res.send('User saved successfully')
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

