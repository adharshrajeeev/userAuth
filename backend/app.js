var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors=require('cors')
const dotenv=require('dotenv');
const mongoose=require('mongoose')
// var logger = require('morgan');


var usersRouter = require('./routes/users');


var app = express();


// app.use(logger('dev'));
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 


app.use('/', usersRouter);

mongoose.connect(process.env.DATABASE).then((response)=>{

    app.listen(process.env.PORT,()=>console.log(`APP RUNNING IN PORT ${process.env.PORT}`))
}).catch((err)=>{
    console.log("error in connections")
})

module.exports = app;
