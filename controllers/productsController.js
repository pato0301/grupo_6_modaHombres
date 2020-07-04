const path = require('path');

const productos = {
    root : (req,res) => {
        res.render('index')
    },
    detail : (req,res) => {
        res.render('detalle_producto')
    },
    buy : (req,res) => {
        res.redirect('/producto')
    }
};

module.exports = productos;