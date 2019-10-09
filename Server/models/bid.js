const mongoose=require('mongoose');

const BidSchema=mongoose.Schema({
    id : Number,
    user : String,
    amount : Number,
});
module.exports = mongoose.model('bid',BidSchema,'bids');