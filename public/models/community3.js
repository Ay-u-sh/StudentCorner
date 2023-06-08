const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Community3PostSchema = new Schema({
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
        default: new Date()
    }
});

const Community3Post = mongoose.model('Community3Post',Community3PostSchema);
module.exports = Community3Post;