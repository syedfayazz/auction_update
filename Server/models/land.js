const mongoose = require('mongoose');

const landSchema = mongoose.Schema({
    id : Number,
    holder: String,
    city: String,
    street: String,
    locality: String,
    sq: Number,
    len: Number,
    wid: Number,
    description: String
})

module.exports = mongoose.model('land', landSchema, 'lands');