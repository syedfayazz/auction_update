const express = require('express');
const router = express.Router();
const House = require('../models/house');

router.get('/getHouses', (req, res) => {
    House.find({}).exec((err, houses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.setHeader('Content-Type', 'Application/Json');
            res.json(houses);
        }
    })  
})


router.post('/addhouse',(req,res)=>{
    
    let newHouse=new House({
        id : req.body.id,
        holder : req.body.holder,
        city : req.body.city,
        street : req.body.street,
        locality : req.body.locality,
        sq : req.body.sq,
        len : req.body.len,
        wid : req.body.wid,
        room : req.body.room,
        hall : req.body.hall,
        description : req.body.description
    
    });
    console.log(req.body);
    newHouse.save((err)=>{
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