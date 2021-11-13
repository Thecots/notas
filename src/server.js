console.clear();
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

// database
mongoose.connect(process.env.URLDB,{ useUnifiedTopology: true, useNewUrlParser: true},(err,res)=>{
    if(err) throw err;
    console.log(`database: ${res.connections[0].name} online`);
})

// server
app.listen(process.env.PORT,() => {
        console.log(`http://localhost:${process.env.PORT}`);
})