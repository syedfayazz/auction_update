const mongoose = require('mongoose');

const goldSchema = mongoose.Schema({
    id :Number,
    gname : String,
    pown : Number,
    grams : Number,
    carat : Number,
    city : String,
    description : String
})

module.exports = mongoose.model('gold',goldSchema,'golds');