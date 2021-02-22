var express = require('express');
var router = express.Router();
const {handlebars} = require('hbs');
var router = express.Router();
const Videos = require('../models/video');
const Users = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
    Videos.find().then((video) => {
      var only3;
      let arr = [];
      for(let i = 0; i <= 2; i++) {
        only3 = video[i];
        arr.push(only3);
      } 
      // console.log('the vids', arr);
      res.render('guest-index', { video: arr, user: req.user });      
    });
  });

// this logs you out using the nav bar menu via passport (no longer links to logutPage route)
router.get('/logout', function(req, res, next) {
  console.log("this user is logged out");
  req.logOut();
  res.redirect('/');
});

module.exports = router;
