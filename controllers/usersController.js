//const path = require('path');
//const fs = require('fs');
//let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
// const db = require('../database/models');

const usuarios = {
    root : (req,res) => {
        console.log("enro en user");
        console.log(req.session.userClient);
        res.render("userInfo",{ user:req.session.userClient,
                                categorias: req.session.categorias,
                                numberProducts:req.session.numberProducts})
    },
    updateUser: (req,res) => {
        res.redirect("/user")
    }
};

module.exports = usuarios;