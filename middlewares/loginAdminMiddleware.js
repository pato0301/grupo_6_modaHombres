module.exports = function loginAdmin(req,res,next) {
    // console.log(req.session.adminUser);
    if (req.session.adminUser){
        return next();
    }
    else if (req.cookies.adminCookie){
        req.session.adminUser = req.cookies.adminCookie;
        return next();
    }
    else {
        return res.redirect('/admin/login')
    }
}