require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =  require("mongoose");
const connectDB = require("./config/conn");

// mongoose.connect(process.env.mongoURI, {useNewUrlParser: true,  useUnifiedTopology: true })
// .then(res => console.log("Connection Succesful to database: " + res.connection.name))
// .catch(err => console.log(`Error in DB connection ${err}`));

connectDB();

var usersRouter = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', usersRouter);

module.exports = app;
