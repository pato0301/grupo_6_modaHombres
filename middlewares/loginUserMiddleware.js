module.exports = function loginAdmin(req,res,next) {
    // console.log(req.session.adminUser);
    if (req.session.userClient){
        return next();
    }
    else {
        return res.redirect('/admin/login')
    }
}