const path = require('path');
const fs = require('fs');
const db = require('../database/models');
// let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

const productos = {
    // root : (req,res) => {
    //     res.render('homeMain',{user:req.session.userClient})
    // },
    detail : (req,res) => {
        db.Producto.findByPk(req.params.productoId,{
            include: [
                {association: "talles",
                }
            ]
        })
        .then(result => {
            // console.log(result);
            res.render('detalle_producto', 
            {product : result.dataValues,
                user:req.session.userClient,
                categorias: req.session.categorias,
                numberProducts:req.session.numberProducts})
        })
    },
    buy : (req,res) => {
        res.redirect('/producto/carrito')
    },
    carrito : (req,res) => {
        res.render('carrito',{  user:req.session.userClient,
                                categorias: req.session.categorias,
                                numberProducts:req.session.numberProducts})
    },
    categoria : (req,res) => {
        let producto = db.Producto.findAll({
            where: {
                active: 1,
                id_categoria: req.params.idCategoria
            },
            limit : 8,
            include: [
                {association: "imagenes"}
            ]
        })
        let categoria = db.Categoria.findByPk(req.params.idCategoria)
        Promise.all([producto,categoria]) 
        .then(result => {
            res.render('categorias',{
                        user:req.session.userClient,
                        products:result[0],
                        categoria:result[1],
                        categorias: req.session.categorias,
                        numberProducts:req.session.numberProducts})
        })
    },
};

module.exports = productos;