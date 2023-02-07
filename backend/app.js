var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors=require('cors')
const mongoose=require('mongoose')
// var logger = require('morgan');


var usersRouter = require('./routes/users');

var app = express();


// app.use(logger('dev'));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/userAuth')

app.use('/', usersRouter);

app.listen(3000,()=>console.log("POST RUNNNIT IN 3000"))

module.exports = app;
