const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const User = require('../models/user');
const Bid = require('../models/bid');
router.get('/view',(req,res)=>{
    Register.find(function(err,register){
        res.json(register);
        console.log(register);
    })
});
router.get('/getBids', (req, res) => {
    Bid.find({}).exec((err, bids) => {
        if (err) {
            console.log(err);
        }
        else {
            res.setHeader('Content-Type', 'Application/Json');
            res.json(bids);
        }
    })  
})

router.post('/bid',(req,res,next)=>{
    let newBid=new Bid({
        user : req.body.user,
        amount :req.body.amount
    });
    newBid.save((err, bid)=>{
        if(err)
        {
            res.json({msg : "Failed to register"});

        }
        else{
            res.json({msg : "Registered Successfully"});
        }
    })
})
router.post('/addlogin',(req,res,next)=>{
    let newUser=new User({
        username : req.body.email,
        password : req.body.pass
        
    });
    newUser.save((err,user)=>{
        if(err)
        {
            res.json({msg : "Failed to Register"});
        }
        else{
            res.json({msg : "Registered Successfully"});
        }
    })
});
router.post('/add',(req,res,next)=>{
    let newRegister=new Register({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phone : req.body.phone,
        pass : req.body.pass
    });
    newRegister.save((err, register)=>{
        if(err)
        {
            res.json({msg : "Failed to register"});

        }
        else{
            res.json({msg : "Registered Successfully"});
        }
    })
});

module.exports = router;