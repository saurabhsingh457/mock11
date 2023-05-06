const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    date: Date
})

const UserModel=mongoose.model('User',userSchema)
module.exports = {UserModel}