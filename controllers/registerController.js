const path = require('path');
const fs = require('fs');
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')

const registro = {
    root : (req,res) => {
        res.render('index')
    },
    registro : (req,res) => {
        res.render('registro')
    },
    saveUser : (req,res) => {
        let newUser = {
            username : req.body.username,
            email : req.body.name
        }
        res.redirect('/register')
    },
};

module.exports = registro;