const express = require('express');
const router = express.Router();
const Gold = require('../models/gold');

router.get('/getGolds', (req, res) => {
    Gold.find({}).exec((err, golds) => {
        if (err) {
            console.log(err);
        }
        else {
            res.setHeader('Content-Type', 'Application/Json');
            res.json(golds);
        }
    })  
})


router.post('/addgold',(req,res)=>{
    
    let newGold=new Gold({
        id : req.body.id,
        gname : req.body.gname,
        pown : req.body.pown,
        grams : req.body.grams,
        carat : req.body.carat,
        city : req.body.city,
        description : req.body.description,
        
    });
    console.log(req.body);
    newGold.save((err)=>{
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