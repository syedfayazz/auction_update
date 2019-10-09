const mongoose=require('mongoose');

const RegisterSchema=mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    phone : Number,
    password : String,
    pass : String
});
module.exports = mongoose.model('register',RegisterSchema,'registers');