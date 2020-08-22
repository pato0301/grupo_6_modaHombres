const path = require('path');
const fs = require('fs');
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

const productos = {
    root : (req,res) => {
        res.render('homeMain',{user:req.session.userClient})
    },
    detail : (req,res) => {
        res.render('detalle_producto', {productId : req.params.productoId,user:req.session.userClient})
    },
    buy : (req,res) => {
        res.redirect('/producto/carrito',{user:req.session.userClient})
    },
    carrito : (req,res) => {
        res.render('carrito',{user:req.session.userClient})
    },
};

module.exports = productos;