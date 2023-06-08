const community1 = require('../models/community1');
const community2 = require('../models/community2');
const community3 = require('../models/community3');
const community4 = require('../models/community4');

module.exports = async(req,res)=>{
    var no=0;
    if(req.url=="/community/post/club1"){
        req.session.no=1;
        posts = await community1.find({}).populate('userid');
    }
    if(req.url=="/community/post/club2"){
        req.session.no=2;
        posts = await community2.find({}).populate('userid');
    }    
    if(req.url=="/community/post/club3"){
        req.session.no=3;
        posts = await community3.find({}).populate('userid');
    }
    if(req.url=="/community/post/club4"){
        req.session.no=4;
        posts = await community4.find({}).populate('userid');
    }
    res.render('../public/views/post',{
        posts,
        title:"Posts-Students Corner"
    });
}