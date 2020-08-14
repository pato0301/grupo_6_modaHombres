const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
// const { json } = require('express');

let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')

const main = {
    root: (req,res) => {
        res.render('homeMain')
    },
    search:(req,res) => {
        res.redirect('/')
    },
    login: (req,res) => {
        res.render('loginMain')
    },
    checkLogIn:function(req,res,next) {
        let errors = validationResult(req);
        console.log(errors);
        if(errors.isEmpty()) {
            console.log("entra aca");
            for(let i =0 ; i < users.length ; i++) {
                if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password , users[i].password)) {
                    
                    req.session.userClient = users[i].email;
                    if (req.body.remember =="on") {
                        res.cookie("userCookie", users[i].email, {maxAge: 1000 * 60  } )
                        // el max age de la cookie esta en milisegundos.... toda esa cuenta seria un año nose cuanto tiempo deberia durar
                    }
                    
                    return res.render('homeMain')
                }
            }
            return res.render('loginMain',{errors:{email:{msg:"credenciales invalidas, no coincide el mail con la contraseña"}}})
        }else{
            return res.render('loginMain' ,{
                errors: errors.mapped(), old: req.body
            })
        }
    },
    register: (req,res) => {
        res.render('registro')
    },
    checkRegister: (req,res) => {
        let errors = validationResult(req);
        console.log(errors);
        if(errors.isEmpty()) {
            console.log("entro aca");
            let newUser = {
                username : req.body.username,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                // avatar: req.files[0].filename,
                height : req.body.altura,
                weight : req.body.peso,
            }
            console.log(newUser);
            users.push(newUser);
            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users))
            req.session.userClient = req.body.email
            res.redirect('/login');
        }else{
            res.render('registro' , {
                errors: errors.mapped()
            })
        }
    },
}

module.exports = main;