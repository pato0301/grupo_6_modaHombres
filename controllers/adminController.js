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
        let newproduct = {
            id: dataProductos.length + 1,
            name: req.body.nombreProducto,
            description: req.body.descriptionProd,
            price: req.body.precioProducto,
            discount: 0,
            image: "wilson-modelo.jpg",
            category: "in-sale",
            active: "si"
        }
        dataProductos.push(newproduct)
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(dataProductos))
        res.redirect('/admin')
    },
    modify : (req,res) => {
        for (let i = 0; i < dataProductos.length; i++) {
            if (dataProductos[i].id == req.params.idProducto) {
                dataProductos[i].name = req.body.nombreProducto;
                dataProductos[i].description = req.body.descriptionProd;
                dataProductos[i].price = req.body.precioProducto;
            }
        }
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(dataProductos))
        res.redirect('/admin')
    },
    saveDelete : (req,res) => {
        for (let i = 0; i < dataProductos.length; i++) {
            if (dataProductos[i].id == req.params.idProducto) {
                dataProductos[i].active = "no";
            }
        }
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(dataProductos))
        res.redirect('/admin')
    },
};

module.exports = productos;