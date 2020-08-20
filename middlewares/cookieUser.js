function cookieUser (req,res,next) {
    if(req.cookies.userCookie != undefined) {
        req.session.userClient = req.cookies.userCookie;
        return res.redirect('/')
    }
    else {
        next();
    } 
}

module.exports = cookieUser;