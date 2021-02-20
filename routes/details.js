var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Video = require('../models/video');
const {handlebars} = require('hbs');

// router.get('/update', function(req, res, next) {
//   res.render('updatedDetailsPage', { title: 'Updated Details Page'});
// });

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // if(err) throw (err);
  let id = req.params.id;
  //.populate('users')
  Video.findOne({_id: id})
    .then((results) => {
      console.log("The single video results from the details get route is ", results);
      // console.log("the users results from the details get route is ", results.users);
      // let accessories = results.accessories;
      res.render('details', {video: results, user: req.user});
    });
});

module.exports = router;