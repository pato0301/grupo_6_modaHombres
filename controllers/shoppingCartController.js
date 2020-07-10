const path = require('path');

const carrito = {
    root : (req,res) => {
        res.render('index')
    },
    carga : (req,res) => {
        res.render('carrito')
    },
    
};

module.exports = carrito;