var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Video = require('../models/video');
const {handlebars} = require('hbs');

// router.get('/update', function(req, res, next) {
//   res.render('updatedDetailsPage', { title: 'Updated Details Page'});
// });

/* GET details of video and user enrollment status. */
router.get('/:id', async function(req, res) {
  try{
    // if(err) throw (err);
  let id = req.params.id;
  let user = req.user._id.toString();
  console.log("the user id is", user);
  //.populate('users')
  Video.findOne({_id: id}).populate('users')
    .then((aVideo) => {
      let isCreator = false;
      if(user == aVideo.creator){
        isCreator = true;
      }
      console.log("The single video results from the details get route is ", aVideo);
      //go get all the users held in mongodb
      let userIDs = aVideo.users.map(x => {return x._id.toString();});
      console.log("The user IDs are ", userIDs);

      //iterate thru users array and look for match
      let isEnrolled;
      for(let i = 0; i < userIDs.length; i++){
        console.log(user);
        console.log(userIDs[i]);
        if(user == userIDs[i]){
          console.log("there is a match fired");
          isEnrolled = true;
        }else{
          console.log("there is not a match fired");
          isEnrolled = false;
        }
      }
      //render based on isEnrolled flag
      if(isEnrolled == true){
        return res.render('details', {video: aVideo, user: req.user, isEnrolled: isEnrolled, isCreator: isCreator});
      }else{
        return res.render('details', {video: aVideo, user: req.user, isEnrolled: isEnrolled, isCreator: isCreator});
      }
      
    });
  }catch(error){
    if(error){
      console.log(error);
      res.sendStatus(500);
      return;
    }
  }
  
  });

module.exports = router;