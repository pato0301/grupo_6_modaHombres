//const path = require('path');
//const fs = require('fs');
//let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
const bcrypt = require('bcrypt');
const db = require('../database/models');

const usuarios = {
    root : (req,res) => {
        res.render("userInfo",{ user:req.session.userClient,
                                categorias: req.session.categorias,
                                numberProducts:req.session.numberProducts})
    },
    updateUser: (req,res) => {
        // console.log("entro en user put");
        // console.log(req.body);
        // console.log(req.files);
        // console.log(req.session.userClient);
        let updates;
        let imagenUpdated = req.files == undefined || req.files.length == 0? req.session.userClient.avatar: req.files[0].filename
        // console.log(imagenUpdated);
        if (req.body.passUser == '' || req.body.passUser.length < 8) {
            updates = {
                username : req.body.userName,
                email : req.body.email,
                avatar: imagenUpdated,
                altura : req.body.altura,
                peso : req.body.peso
            }
        }
        else{
            updates = {
                username : req.body.userName,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.passUser,12),
                avatar: imagenUpdated,
                altura : req.body.altura,
                peso : req.body.peso
            }
        }
        // console.log(updates);
        db.Usuario.update(
            updates,
            { where: { idusuarios: req.session.userClient.idusuarios } }
        )
        .then(result => {
            db.Usuario.findOne({
                where: {
                    idusuarios: req.session.userClient.idusuarios,
            }})
            .then(userUpdated => {
                req.session.userClient = userUpdated.dataValues;
                res.redirect("/user")
            })
        })
    },
};

module.exports = usuarios;