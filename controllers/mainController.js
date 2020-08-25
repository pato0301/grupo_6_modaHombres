const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

const main = {
    root: (req,res) => {
        res.render('homeMain',{user:req.session.userClient})
    },
    search:(req,res) => {
        res.redirect('/')
    },
    login: (req,res) => {
        res.render('loginMain',{user:req.session.userClient})
    },
    checkLogIn:function(req,res,next) {
        let errors = validationResult(req);
        // console.log(errors);
        if(errors.isEmpty()) {
            db.Usuario.findOne({
                where: {
                email: req.body.email,
            }})
            .then(resultados=> {
                if (resultados != null) {
                    // console.log(resultados.dataValues);
                    if (bcrypt.compareSync(req.body.password,resultados.dataValues.password)){
                        req.session.userClient = resultados.dataValues;
                        if (req.body.remember =="on") {
                            res.cookie("userCookie", resultados.dataValues.email, {maxAge: 1000 * 60  } )
                            // el max age de la cookie esta en milisegundos.... toda esa cuenta seria un año nose cuanto tiempo deberia durar
                        }
                        return res.redirect('/')
                    }
                    return res.render('loginMain',{errors:{email:{msg:"credenciales invalidas, no coincide el mail con la contraseña"}}
                                                ,user:req.session.userClient})
                }
                else{
                    return res.render('loginMain',{errors:{email:{msg:"credenciales invalidas, no coincide el mail con la contraseña"}}
                                                ,user:req.session.userClient})
                }
            })
        }else{
            return res.render('loginMain' ,{
                errors: errors.mapped(), old: req.body,
                user:req.session.userClient
            })
        }
    },
    register: (req,res) => {
        res.render('registro',{user:req.session.userClient})
    },
    checkRegister: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            console.log(req.files);
            let newUser = {
                username : req.body.username,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                avatar: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
                altura : req.body.altura == ''? null : req.body.altura,
                peso : req.body.peso == ''? null : req.body.peso,
            }
            db.Usuario.create(newUser);
            req.session.userClient = newUser
            res.redirect('/login');
        }else{
            res.render('registro' , {
                errors: errors.mapped(),
                user:req.session.userClient
            })
        }
    },
    user: (req,res) => {
        res.render("userInfo",{user:req.session.userClient})
    }
}

module.exports = main;