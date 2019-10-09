const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors =require('cors');
const userApi = require('./Server/routes/userApi');
const registration = require('./Server/routes/registration');
const gold = require('./Server/routes/gold');
const land = require('./Server/routes/land');
const house = require('./Server/routes/house');
const bid = require('./Server/routes/bid');
connectionString = "mongodb://localhost:27017/registerlist";
const PORT = 5000;
mongoose.connect(connectionString,(err)=>{
if(err)
    console.log(err);
else
    console.log("Connection Has Successfull");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/user',userApi);
app.use('/api/user',registration);
app.use('/api/user',gold);
app.use('/api/user',land);
app.use('/api/user',house);
app.use('/api/user',bid);


app.listen(PORT,()=>{
    console.log(`Server Started Successfully on Port ${PORT}`);
})
