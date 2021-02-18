var express = require('express');
var router = express.Router();
const Video = require("../models/video");
// const Accessory = require("../models/accessory");
const {handlebars} = require('hbs');


/*get the create cube page*/
router.get('/', function(req, res, next) {
    res.render('create-course');
});

//process the create cube form
router.post('/', function(req, res, next) {
    
    try{
        // console.log('create video form fired');
        // console.log(req.body);
        // let data = req.body;
        // let status = data.isPublic; //status = is video public or not via checkbox
        // console.log(status);

        if(status == "on"){
            
            let video = new Video({
                title: data.title,
                description: data.description,
                imageUrl: data.imageUrl,
                isPublic: true,
            });
            video.save()
            .then((response) => {
                console.log(response);
                res.render('guest-home');
            });
           
        }else{
            let video = new Video({
                title: data.title,
                description: data.description,
                imageUrl: data.imageUrl,
                isPublic: false,
            });
            video.save()
            .then((response) => {
                console.log(response);
                res.render('guest-home');
            });
        }
    }catch(error){
        console.log(error);
    }
});
    
module.exports = router;