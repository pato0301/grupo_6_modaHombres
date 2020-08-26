//const path = require('path');
//const fs = require('fs');
//let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
const db = require('../database/models');

const usuarios = {
    root : (req,res) => {
<<<<<<< HEAD
        db.Usuario.findAll({
            include: [{association: 'direcciones'}]
        }).then((resultados)=> {
            res.render('users',{users:resultados});    
        })
        //res.render('users',{users:users})//
=======
        res.render("userInfo",{user:req.session.userClient})
>>>>>>> 14458de5d04c672b35f188e8a53e403856417f27
    },
};

module.exports = usuarios;