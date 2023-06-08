module.exports = (req,res)=>{
    var username = "";
    var name = "";
    var email = "";
    var password = "";
    const data = req.flash('data')[0];
    if(typeof(data)!="undefined"){
            username=data.username
            name=data.name;
            email=data.email;
            password=data.password;
    }
    res.render('../public/views/loginSignup',{
        // errors:req.session.validationErrors
        errors:req.flash('validationErrors'),
        username:username,
        name:name,
        email:email,
        password:password,
        title:"Login/Signup-Students Corner"
    });
}