var express = require('express');
var router = express.Router();
const {handlebars} = require('hbs');
var router = express.Router();
const Videos = require('../models/video');
const Users = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
    Videos.find().then((video) => {
      console.log(video)
  ;    res.render('user-index', {video: video, user: req.user});
    });
  });

//this logs you out using the nav bar menu via passport (no longer links to logutPage route)
// router.get('/logout', function(req, res, next) {
//   req.logOut();
//   res.redirect('/');
// });

module.exports = router;
