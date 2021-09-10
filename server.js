const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
const router = require('express').Router();
const mongoose = require('mongoose');
const {notFound, errorHandler} = require('./Middleware/error.js');
const colors = require('colors');
const cors = require('cors');
const passport = require('passport');
const source = process.env.ATLAS_CONNECTION;
const {User} = require('./Models');
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Connect to MongoDB
connectDB();


//Connect on Local Machine
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}.`.cyan.underline);
});

//itemrouter mount
const itemsRoute = require('./controllers/item.controller');
app.use('/item', itemsRoute);

//passport-local-mongoose
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

//userroute mount
const userRoutes = require('./controllers/user.controller');
app.use('/user', userRoutes);

//app.use(notFound);
app.use(errorHandler);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});