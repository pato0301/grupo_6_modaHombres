const path = require('path');

const productos = {
    root : (req,res) => {
        res.render('carga_producto')
    },
    carga : (req,res) => {
        res.render('carga_producto')
    },
    agregar : (req,res) => {
        res.redirect('/admin')
    },
    modify : (req,res) => {
        res.redirect('/admin')
    },
    delete : (req,res) => {
        res.redirect('/admin')
    },
};

module.exports = productos;