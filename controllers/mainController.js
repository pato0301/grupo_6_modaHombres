const path = require('path');

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
        res.redirect('/')
    },
}

module.exports = main;