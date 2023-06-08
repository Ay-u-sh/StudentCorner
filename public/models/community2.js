const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunityPost2Schema = new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    subject:{
        type:String
    },
    message:{
        type:String,
        required:[true,"Post cannot be empty"]
    },
    datePosted:{
        type:Date,
        default:new Date()
    }
});

const Community2Post = mongoose.model('Community2Post',CommunityPost2Schema);
module.exports = Community2Post;