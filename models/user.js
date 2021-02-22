

//create user schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//for passport auth
var passportLocalMongoose = require('passport-local-mongoose');
const Video = require('./video');

//create our user object factory/schema
const User = new Schema({
    // _id: mongoose.Schema.Types.ObjectId, <---this is automatically added by mongo, so we aren't generating an id, it will break your code (pdf uses it but outdated)
    username: String,
    password: String,
    courses: [{ type: Schema.Types.ObjectId, ref: 'Video'}]
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);