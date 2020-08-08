const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const { json } = require('express');
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
users = JSON.parse(users);
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
        if(errors.isEmpty()) {
            for(let i =0 ; i < users.length ; i++) {
                if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password , users[i].password)) {
                    res.render('homeMain')
                }
            }
        }else{
            res.redirect('/login' ,{
                errors: errors.mapped()
            })
        }
    },
    register: (req,res) => {
        res.render('registro')
    },
    checkRegister: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
        let newUser = {
            username : req.body.username,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password,12),
            avatar: req.files[0].filename,
            height : req.body.altura,
            weight : req.body.peso,
        }
        users.push(newUser);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users))
        req.session.userClient = req.body.email
        res.redirect('/users/login');
     }else{
        res.render('/loginMain' , {
            errors: errors.mapped()
        })
        
        }
    },
}

module.exports = main;