const path = require('path');
const fs = require('fs')
let dataProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')));
const bcrypt = require('bcrypt')

const productos = {
    root : (req,res,next) => {
        res.render('loginAdmin', {typePage: 'Admin Login'})
        // res.render('carga_producto')
    },
    loginAdmin : (req,res) => {
        req.session.adminUser = req.body.email
        res.redirect('/admin')
        // res.render('carga_producto')
    },
    register : (req,res) => {
        res.render('loginAdmin', {typePage: 'Admin Register'})
        // res.render('carga_producto')
    },
    saveAdmin : (req,res) => {
        let newAdminUser = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,12),
        }
        req.session.adminUser = req.body.email
        res.redirect('/admin')
        // res.render('login', {typePage: 'Admin Register'})
    },
    carga : (req,res,next) => {
        // res.render('login', {typePage: 'Admin Login'})
        // console.log('entra en /admin');
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