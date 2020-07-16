const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
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
    checkLogIn: (req,res) => {
        res.redirect('/')
    },
    register: (req,res) => {
        res.render('registro')
    },
    checkRegister: (req,res) => {
        let newUser = {
            username : req.body.username,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password,12),
            height : req.body.altura,
            weight : req.body.peso,
        }
        users.push(newUser);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users))
        res.redirect('/')
    },
}

module.exports = main;