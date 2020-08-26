const path = require('path');
const fs = require('fs');
const db = require('../database/models');
// let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

const productos = {
    // root : (req,res) => {
    //     res.render('homeMain',{user:req.session.userClient})
    // },
    detail : (req,res) => {
        db.Producto.findByPk(req.params.productoId)
        .then(result => {
            res.render('detalle_producto', {product : result.dataValues,user:req.session.userClient})
        })
    },
    buy : (req,res) => {
        res.redirect('/producto/carrito')
    },
    carrito : (req,res) => {
        res.render('carrito',{user:req.session.userClient})
    },
};

module.exports = productos;