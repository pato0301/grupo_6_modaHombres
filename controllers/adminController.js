const path = require('path');
const fs = require('fs')
const db = require('../database/models');
let dataProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')));
const bcrypt = require('bcrypt')

const productos = {
    root : (req,res,next) => {
        res.render('loginAdmin', {typePage: 'Admin Login'})
        // res.render('carga_producto')
    },
    loginAdmin : (req,res) => {
        db.Admin.findOne({
            where: {
            email: req.body.email,
        }})
        .then(resultados=> {
            if (resultados != null) {
                if (bcrypt.compareSync(req.body.password,resultados.dataValues.password)){
                    req.session.adminUser = req.body.email
                    if (req.body.remember =="on") {
                        res.cookie("adminCookie", resultados.dataValues.email, {maxAge: 1000 * 60  } )
                        // el max age de la cookie esta en milisegundos.... toda esa cuenta seria un año nose cuanto tiempo deberia durar
                    }
                    res.redirect('/admin')
                }
            }
            else {
                return res.redirect('/admin/register')
            }
        })
    },
    register : (req,res) => {
        res.render('loginAdmin', {typePage: 'Admin Register'})
        // res.render('carga_producto')
    },
    saveAdmin : (req,res) => {
        let newAdminUser = {
            username: req.body.adminName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,12),
        }
        req.session.adminUser = req.body.email
        db.Admin.create(newAdminUser);
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
    // edit : (req,res) => {
    //     let producto
    //     for (let i = 0; i < dataProductos.length; i++) {
    //         if (dataProductos[i].id == req.params.idProducto) {
    //             producto = dataProductos[i];
    //         }
    //     }
    //     res.render('edit_producto',{producto:producto})
    // },
    // delete : (req,res) => {
    //     let producto
    //     for (let i = 0; i < dataProductos.length; i++) {
    //         if (dataProductos[i].id == req.params.idProducto) {
    //             producto = dataProductos[i];
    //         }
    //     }
    //     res.render('delete_producto',{producto:producto})
    // },
    // agregar : (req,res) => {
    //     console.log(req.files);
    //     let newProduct = {
    //         // id: dataProductos.length + 1,
    //         nombre: req.body.nombreProducto,
    //         descripcion: req.body.descriptionProd,
    //         precio: parseFloat(req.body.precioProducto),
    //         // discount: 0,
    //         image: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
    //         category: 1,
    //         active: 1
    //     }
    //     console.log(newProduct);
    //     db.Producto.create(newProduct);
    //     // dataProductos.push(newproduct)
    //     // fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(dataProductos))
    //     res.redirect('/admin')
    // },
    modify : (req,res) => {
        // console.log(req.files);
        // console.log(req.body);
        for (let i = 0; i < dataProductos.length; i++) {
            if (dataProductos[i].id == req.params.idProducto)  {
                if (req.files.length > 0) {
                    console.log("hay imagen nueva");
                    dataProductos[i].name = req.body.name;
                    dataProductos[i].description = req.body.desc;
                    dataProductos[i].price = req.body.price;
                    dataProductos[i].image = req.files[0].filename;
                }
                else {
                    console.log("no hay imagen nueva");
                    dataProductos[i].name = req.body.name;
                    dataProductos[i].description = req.body.desc;
                    dataProductos[i].price = req.body.price;
                }
                
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