const path = require('path');

const productos = {
    root : (req,res) => {
        res.render('homeMain')
    },
    detail : (req,res) => {
        res.render('detalle_producto', {productId : req.params.productoId})
    },
    buy : (req,res) => {
        // res.redirect('/producto')
        res.redirect('/producto/carrito')
    },
    carrito : (req,res) => {
        res.render('carrito')
    },
};

module.exports = productos;