const User = require('../models/User');

module.exports =  (req,res,next)=>{
    User.findById(req.session.userId,(error,found)=>{
        if(!found){
            return res.redirect('/loginsignup');
        }
        next();
    });
}