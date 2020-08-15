module.exports = function loginUser(req,res,next) {
    // console.log(req.session.adminUser);
    if (req.session.userClient){
        return next();
    }
    else {
        return res.redirect('/login')
    }
}