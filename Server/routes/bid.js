const express = require('express');
const router = express.Router();
const Bid = require('../models/bid');

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

module.exports = router;