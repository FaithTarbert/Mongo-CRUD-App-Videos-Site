var express = require('express');
var router = express.Router();
const Video = require("../models/video");
const {handlebars} = require('hbs');
const { body, validationResult} = require('express-validator');


/*get the upload video page*/
router.get('/', function(req, res, next) {
    res.render('create-course', {user: req.user});
});

//process the create video form
router.post('/', [
    body('title')
        .trim()
        .isLength({min: 4})
        .withMessage('Title Must Be At Least 4 Characters Long'),
    body('description')
        .trim()
        .isLength({min: 20})
        .withMessage('Description Must Be At Least 20 Characters Long'),
    body('imageUrl')
        .trim()
        .isURL({ protocols: ['http', 'https'], require_protocol: true})
        .withMessage('Link Must Start With HTTP or HTTPS'),
], async (req, res, next) => {
    try {
        var displayErr;
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()){
            errors.array().forEach(error => {
                displayErr = error.msg;
                // console.log(displayErr);       
            });
            res.render('create-course', {errors: errors.array()});
            return;
        }
        console.log('create video form fired');
        // console.log(req.body);
        let data = req.body;
        let status = data.isPublic; //status = is video public or not via checkbox
        // console.log(status);

        if(status == "on"){
            
            let video = new Video({
                title: data.title,
                description: data.description,
                imageUrl: data.imageUrl,
                creator: req.user._id,
                isPublic: true,
                createdAt: new Date()
            });
            video.save()
            .then((response) => {
                console.log(response);
                res.redirect('user-index');
            });
           
        }else{
            let video = new Video({
                title: data.title,
                description: data.description,
                imageUrl: data.imageUrl,
                isPublic: false,
                createdAt: new Date()
            });
            video.save()
            .then((response) => {
                console.log(response);
                res.redirect('user-index');
            });
        }
    }catch(err) {
        console.log(err);
    }});
    
module.exports = router;