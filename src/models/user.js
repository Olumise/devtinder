const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({

firstName : String,
lastName : String,
gender: String,
password: String,
age: Number,
email: String

})

const User = mongoose.model('User', userSchema)

module.exports = User