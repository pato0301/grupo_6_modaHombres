const path = require('path');

const main = {
    root: (req,res) => {
        res.render('index')
    },
    search:(req,res) => {
        res.redirect('/')
    },
}

module.exports = main;