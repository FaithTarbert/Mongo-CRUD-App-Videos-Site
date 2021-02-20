var express = require('express');
var router = express.Router();
const User = require("../models/user");
const Video = require('../models/video');

router.get('/:id', async (req, res, next) => {    
    let video;
    let status;
    try {
        video = await Video.findById(req.params.id);
        console.log(video);
        await video.deleteOne();
        res.render('user-index', {user: req.user});
    }catch(err) {
        if(err) throw err;
        if (video == null) {
            console.log("null option fired");
            res.render('user-index', {user: req.user});
        }else {
            console.log("error fired");
            res.redirect(`404`);
        }       
    }     
});

module.exports = router;