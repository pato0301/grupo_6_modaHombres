module.exports = function loginUser(req,res,next) {
    // console.log(req.session.adminUser);
    if (req.session.userClient){
        return next();
    }
    else if (req.cookies.userCookie){
        req.session.userClient = req.cookies.userCookie;
        return next();
    }
    else {
        return res.redirect('/login')
    }
}