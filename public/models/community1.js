const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Community1PostSchema = new Schema({
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
        required:[true,"Message cannot be empty"]
    },
    datePosted:{
        type:Date,
        default:new Date()
    }
});

const Community1Post = mongoose.model('Community1Post',Community1PostSchema);
module.exports = Community1Post;