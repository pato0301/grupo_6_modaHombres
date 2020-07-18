const path = require('path');
const fs = require('fs');
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

const productos = {
    root : (req,res) => {
        res.render('homeMain')
    },
    detail : (req,res) => {
        res.render('detalle_producto', {productId : req.params.productoId})
    },
    buy : (req,res) => {
        res.redirect('/producto/carrito')
    },
    carrito : (req,res) => {
        res.render('carrito')
    },
};

module.exports = productos;