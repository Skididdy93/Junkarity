const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const { Item, Category } = require('../Models');
const { itemModule } = require('./modules/item');
const { report } = require('./user.controller');

// //Fetch all items
// router.get('/', passport.authenticate('local'), (req,res) => {
//     const items = Item.find({}).then();
//     res.json(items);
// });

//Fetch all items
router.get('/', async (req,res) => {
    const items = await Item.find({});
    res.json(items);
});

//Fetch specific items by category
router.get('/:id', async (req,res) => {
    const item = await Item.findById(req.params._id);
    if(item){
        res.json(item);
    } else{
        res.status(404);
        throw new Error("Product not found")
    }
})

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