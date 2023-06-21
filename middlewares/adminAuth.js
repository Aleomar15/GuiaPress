function adminAuth(req,res,next){//next serve para dar continuidade na requisição
    if(req.session.user != undefined){
        next();
    }else{
        res.redirect("/login");
    }
}

module.exports = adminAuth;