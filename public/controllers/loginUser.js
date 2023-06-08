const User = require("../models/User")
const bcrypt = require("bcrypt");

module.exports = (req,res)=>{
    User.findOne({username:req.body.username},(error,userfound)=>{
        if(error){
            res.redirect('/loginsignup');
        }
        if(userfound){
            if(req.body.password === userfound.password){
                req.session.userId = userfound._id;
                res.redirect('/');
            }
            else{
                const validationErrors = "Password is incorrect";
                req.flash('validationErrors',validationErrors);
                res.redirect('/loginsignup');
            }
        }
        else{
            const validationErrors = "User does not exists,try to signup first";
            req.flash('validationErrors',validationErrors);
            res.redirect('/loginsignup');
        }
    });
}