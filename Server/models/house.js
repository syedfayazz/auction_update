const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    id : Number,
    holder: String,
    city: String,
    street: String,
    locality: String,
    sq: Number,
    len: Number,
    wid: Number,
    room: Number,
    Hall: Number,
    description: String
})

module.exports = mongoose.model('house', houseSchema, 'houses');