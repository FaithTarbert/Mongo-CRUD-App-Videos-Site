var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


/* GET login page*/
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login Page', user : req.user });
    // res.send('This is working');
});

router.post('/', passport.authenticate('local', {failureRedirect: '/login' }), function(req, res) {
    console.log("This User Is Logged In...");
    res.redirect('user-index');
});

module.exports = router;