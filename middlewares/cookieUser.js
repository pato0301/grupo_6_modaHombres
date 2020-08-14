function cookieUser (req,res,next) {
    if(req.cookiess.userCookie != undefined) {
        req.session.userClient = req.cookies.userCookie;
    } 
    next();

    }

    module.exports = cookieUser;