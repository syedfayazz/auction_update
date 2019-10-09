const express = require('express');
const router = express.Router();
const Land = require('../models/land');

router.get('/getLands', (req, res) => {
    Land.find({}).exec((err, lands) => {
        if (err) {
            console.log(err);
        }
        else {
            res.setHeader('Content-Type', 'Application/Json');
            res.json(lands);
        }
    })  
})


router.post('/addland',(req,res)=>{
    
    let newLand=new Land({
        id : req.body.id,
        holder : req.body.holder,
        city : req.body.city,
        street : req.body.street,
        locality : req.body.locality,
        sq : req.body.sq,
        len : req.body.len,
        wid : req.body.wid,
        description : req.body.description
    
    });
    console.log(req.body);
    newLand.save((err)=>{
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