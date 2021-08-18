const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const source = process.env.ATLAS_CONNECTION;
const User = require('./Models/user.model');
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Connect to MongoDB cluster
mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once('open', () => {
    console.log("Rogati fuerimus");
});

//Connect on Local Machine
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Your plate of shit has been served at port: ${PORT}.`);
});

const itemsRoute = require('./controllers/item.controller');
app.use('/item', itemsRoute);


//passport-local-mongoose
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

//create a user
const userController = require('./controllers/user.controller');
app.use('/user', userController);


//create a user
const userRoutes = require('./controllers/user.controller');
app.use('/user', userRoutes);
