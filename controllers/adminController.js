const path = require('path');
const fs = require('fs')
let dataProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')));

const productos = {
    root : (req,res) => {
        res.render('carga_producto')
    },
    carga : (req,res) => {
        res.render('carga_producto')
    },
    select : (req,res) => {
        res.render('selectAdmin_producto',{productos:dataProductos})
    },
    edit : (req,res) => {
        let producto
        for (let i = 0; i < dataProductos.length; i++) {
            if (dataProductos[i].id == req.params.idProducto) {
                producto = dataProductos[i];
            }
        }
        res.render('edit_producto',{producto:producto})
    },
    delete : (req,res) => {
        let producto
        for (let i = 0; i < dataProductos.length; i++) {
            if (dataProductos[i].id == req.params.idProducto) {
                producto = dataProductos[i];
            }
        }
        res.render('delete_producto',{producto:producto})
    },
    agregar : (req,res) => {
        res.redirect('/admin')
    },
    modify : (req,res) => {
        res.redirect('/admin')
    },
    saveDelete : (req,res) => {
        res.redirect('/admin')
    },
};

module.exports = productos;