
//create the mongoose schema model for use by the rest of our application (step 1)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cube = require('./user');

const videoSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId, <---this is automatically added by mongo, so we aren't generating an id, it will break your code (pdf uses it but outdated)
    title: String,
    description: String,
    imageUrl: String,
    isPublic: { type: Boolean},
    createdAt: String,
    // enrolled: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    //creator: [{ type: Schema.Types.ObjectId, ref: 'User'}]
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;