var express = require('express');
var router = express.Router();
const Video = require('../models/video');
// const User = require("../models/user");


router.get('/:id/', (req, res, next) => {
    let id = req.params.id;
    let status;
    // console.log('edit id is', id);
    Video.findOne({_id: id})
        .then((video) => {
            // if(video.isPublic == true){
            //     console.log("video isPublic if statement fired")
            //     status = "on";
            // }
            res.render('edit', {video: video, user: req.user});
    });    
});
router.post('/:id', async (req, res) => {    
    let video;
    let data = req.body;
    try {

        video = await Video.findById(req.params.id);
        // console.log("the edit post request fired", video);
        video.title = data.title, 
        video.description = data.description, 
        video.imageUrl = data.imageUrl, 
        video.isPublic = data.isPublic,
        await video.save();
        res.redirect('/user-index');
        
    }catch(err) {
        if(err) throw err;
            if (video == null) {
                res.redirect('/user-index');
            }else {
                res.render('/details', { video: video, errorMessage: 'Error Editing Video'});
            }       
    }     
});
module.exports = router;