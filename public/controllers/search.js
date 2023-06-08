module.exports = (req,res)=>{
    const resource = ['resource','resources'];
    const community = ['community'];
    const contact = ['contact'];
    const loginsignup = ['login','signup','register',];
    const free = ['free','free for students','freeforstudents'];
    const book = ['book','books'];
    const que = ['questions','question','practice questions','practice'];
    const quiz = ['quiz','test'];
    const searchitems = [resource,community,contact,loginsignup,free,book,que,quiz];

var i=0;var j=0;
    for(i=0;i<searchitems.length;i++){
        var searchelement = searchitems[i];
        for(j=0;j<searchelement.length;j++){
            if((req.body.searchdata.toLowerCase()==searchelement[j])){
                if(i==0){
                    res.redirect('/resources');
                    break;
                }
                if(i==1){
                    res.redirect('/community');
                    break;
                }
                if(i==2){
                    res.redirect('/contact');
                    break;
                }
                if(i==3){
                    res.redirect('/loginsignup');
                    break;
                }
                if(i==4){
                    res.redirect('resources/freeutilites');
                    break;
                }
                if(i==5){
                    res.redirect('resources/books');
                    break;
                }
                if(i==6){
                    res.redirect('resources/questions');
                    break;
                }
                if(i==7){
                    res.redirect('resources/quiz');
                    break;
                }
            }
        }
    }
    if(searchitems[i-1]==quiz){
        res.redirect('/notapage');
    }

}