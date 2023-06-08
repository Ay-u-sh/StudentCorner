const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Community4PostSchema = new Schema({
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

const Community4Post = mongoose.model('Community4Post',Community4PostSchema);
module.exports = Community4Post;