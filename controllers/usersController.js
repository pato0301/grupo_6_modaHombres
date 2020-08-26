//const path = require('path');
//const fs = require('fs');
//let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
// const db = require('../database/models');

const usuarios = {
    root : (req,res) => {
        res.render("userInfo",{user:req.session.userClient})
    },
};

module.exports = usuarios;