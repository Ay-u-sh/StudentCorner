/* WORKS TO PREVENT CLIENT FROM ACCESSING PAGES WHICH REQUIRE USER TO BE LOGGED IN OR TO PREVENT
CLIENT FROM SIGNING/LOGINING IN AGAIN */

/* MIDDLEWARE USES NEXT() AS TO PASS THE CONTROL TO NEXT EXECUTABLE CODE.
IF NOT USED THE REST PROCESS MAY NOT BE EXECUTED
*/
const User = require('../models/User.js');

module.exports = (req,res,next)=>{
    User.findById(req.session.userId,(error,found)=>{
        if(found){
           return res.redirect('/');
        }
        next();
    });
}