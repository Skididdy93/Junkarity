const express = require('express');
const router = require('express').Router();
const {Item} = require('../Models');
const passport = require('passport');
const { find } = require('../Models/user.model');
const { itemModule } = require('./modules/item');

// router.get('/', passport.authenticate('local', {}), (req,res) => {
//     res.send('Item');
// });

router.get('/', (req,res) => {
    passport.authenticate('local', function (req, res, info) {
        console.log(info)
        res.send('ok');
    })(req,res)
});

// const doc = Item.find({
//     name: "shoes",
// });

//console.log(doc);

//Item.find({$text: {$search: searchString}});

//Query item with the name shoes
Item.findOne({name: 'Shoes'}, function (err, Item) {
    if (err) return console.log('Try again');
    console.log(Item);
});

router.post('/', async (req, res)=> {
    const body = req.body;
    try {
        const newItem = await itemModule.createFromData(body);
        res.json(newItem);
    } catch (err) {
        res.json({ message: err});
        console.log("Unable to post", err);
    }
});


module.exports = router;