const express = require('express');
const router = require('express').Router();
const {Category} = require('../Models');

router.get('/category',auth,async (req,res) => {
    const match = {}
    const sort = {}
    if(req.query.isCompleted){
        match.isCompleted = req.query.isCompleted === 'true'
    }
    if(req.query.sortBy){
        const str = req.query.sortBy.split(':')
        sort[str[0]] = str[1] === 'desc' ? -1:1
    }
    try {
        // const category = await Category.find({owner:req.user._id})
        await req.user.populate({
            path:'category',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
            }
        }).execPopulate();
        res.status(200).send(req.user.category)
    }catch(e) {
        res.status(400).send(e.message)
    }
})

router.get('/category/:name',auth,async (req,res) => {
    try {
        const category = await Category.findByOne({_id:req.params.id,owner:req.user._id})
        if (!category)
           return  res.status(404).send()
        res.status(200).send(category)
    }catch(e){
        res.status(400).send()
    }
})



module.exports = router;