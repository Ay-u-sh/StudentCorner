const User = require('../models/User.js');
const path = require('path');
module.exports = (req,res)=>{
    User.create(req.body,(error,user)=>{
        if(error){
            const validationErrors = Object.keys(error.errors).map(key=>error.errors[key].message);
            // req.session.validationErrors = validationErrors;
            const error1 = validationErrors[0];
            const error2 = validationErrors[1];
            if(typeof(error1)!="undefined" && typeof(error2)!="undefined"){
                if(error1[39]=='.' && error2[36]=='.'){
                    req.body.username="Username is taken.Try a different one!";
                    req.body.email="Email address is taken!";
                    req.flash('data',req.body);   
                }
            }
            if(typeof(error1)!="undefined"){
                if(error1[39]=='.'){
                req.body.username="Username is taken.Try a different one!";
                req.flash('data',req.body);
                }
            }
            if(typeof(error1)!="undefined"){
                if(error1[36]=='.'){
                    req.body.email="Email address is taken!";
                    req.flash('data',req.body);
                }
            }
            res.redirect('/loginsignup');
        }
        else{
            req.session.userId = user._id;
            res.redirect('/');
        }
    });
}