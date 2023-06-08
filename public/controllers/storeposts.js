const community1 = require('../models/community1');
const community2 = require('../models/community2');
const community3 = require('../models/community3');
const community4 = require('../models/community4');

module.exports = async(req,res)=>{
    if(req.session.no==1){
        await community1.create({
            userid:req.session.userId,
            ...req.body},
            (error,success)=>{
            if(error){
                res.redirect('/community');
            }
            if(success){
                res.redirect('/community/post/club1');
            }
        });
    }
    if(req.session.no==2){
        await community2.create({
            userid:req.session.userId,
            ...req.body
        },
            (error,success)=>{
            if(error){
                res.redirect('/community');
            }
            if(success){
                res.redirect('/community/post/club2');
            }
        });
    }
    if(req.session.no==3){
        await community3.create({
            userid:req.session.userId,
            ...req.body
        },
            (error,success)=>{
            if(error){
                res.redirect('/community');
            }
            if(success){
                res.redirect('/community/post/club3');
            }
        });
    }
    if(req.session.no==4){
        await community4.create({
            userid:req.session.userId,
            ...req.body
        },
            (error,success)=>{
            if(error){
                res.redirect('/community');
            }
            if(success){
                res.redirect('/community/post/club4');
            }
        });
    }
}