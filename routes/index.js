var express = require('express');
var router = express.Router();
const {handlebars} = require('hbs');
var router = express.Router();
// const Cubes = require('../models/cube');

/* GET home page. */
router.get('/', function(req, res, next) {
res.render("guest-home", { title: "This is the Guest User Home Page"});
});

//this logs you out using the nav bar menu via passport (no longer links to logutPage route)
// router.get('/logout', function(req, res, next) {
//   req.logOut();
//   res.redirect('/');
// });

module.exports = router;
