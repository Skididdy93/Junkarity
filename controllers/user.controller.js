const express = require('express');
const passport = require('passport');
const { deleteModel } = require('mongoose');
const {User} = require('../Models');
const router = require('express').Router();

//New User
router.post('/signup', function(req, res) {
	User.register({username:req.body.username, active: false}, req.body.password, function(err, user) {
//	User.register(Users, req.body.password, function(err, user) {
		if (err) {
			return res.json({success:false, message:"Your account could not be saved. Error: ", err})
		}else{
			return res.json({success: true, message: "Your account has been saved"})
		}
		});
});


const doLogin = function(req, res) {
    if(!req.body.username){
       return res.json({success: false, message: "Username was not given"})
    } 

    if(!req.body.password){
        return res.json({success: false, message: "Password was not given"})
    }
        
    passport.authenticate('local', function (err, user, info) {
        if(err){
           return res.json({success: false, message: err})
        }
        if (! user) {
            return res.json({success: false, message: 'username or password incorrect'})
        }
        req.login(user, function(err){
            if(err){
				console.log(err);
                return res.json({success: false, message: err})
            }
            return res.json({success:true, message:"Authentication successful"});
        })
    })(req, res);
};

router.post('/login', doLogin);    
module.exports = router;