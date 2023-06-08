const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const post = mongoose.model('post',postSchema);
module.exports = post; 