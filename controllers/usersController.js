//const path = require('path');
//const fs = require('fs');
//let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
const db = require('../database/models');

const usuarios = {
    root : (req,res) => {
        db.Usuario.findAll().then((resultados)=> {
            res.render('users',{users:resultados})    
        })
        //res.render('users',{users:users})//
    },
};

module.exports = usuarios;