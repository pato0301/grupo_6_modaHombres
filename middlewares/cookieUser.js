function cookieUser (req,res,next) {
    if(req.cookies.userCookie != undefined) {
        req.session.userClient = req.cookies.userCookie;
    } 
    next();

    }

    module.exports = cookieUser;