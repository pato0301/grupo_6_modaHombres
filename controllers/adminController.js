const path = require('path');
const fs = require('fs')
const db = require('../database/models');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt')

const productos = {
    root : (req,res,next) => {
        // db.Producto.findAll({
        //     // plain: false,
        //     // raw: true,
        //     // nest: true,
        //     include: [
        //         // {model: db.TalleProducto, as: 'talleProducto'} 
        //         // {association: "talleProducto"}
        //         {association: "talles",
        //         }
        //     ],
        //     where: {
        //         idproducto: 4,
        //         // current_season:1
        //     },
        //     // limit : 1
        // })
        // .then(result => {
        //     console.log(result);
        //     // console.log(result.length);
        //     // for (let i = 0; i < result.length; i++) {
        //     //     // console.log(result[i].dataValues);
        //     //     console.log(result[i].dataValues.talles);
        //     //     console.log(result[i].dataValues.talles.length);
        //     //     // for (let i = 0; i < result[i].dataValues.talles.length; i++) {
        //     //     //     console.log(result[i].dataValues.talles);
        //     //     // }
                
        //     // }
        // })
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
                        res.cookie("adminCookie", resultados.dataValues.email, {maxAge: 1000 * 60 * 60 } )
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
        let talles = db.Talle.findAll({
            order: [
                ['prenda', 'DESC'],
                ['idtalle', 'ASC']
            ]
        })
        // .then(result => {
        //     return res.render('carga_producto',{talles:result})
        //     // let prenda = ""
        //     // for (let i = 0; i < result.length; i++) {
        //     //     if(i === 0){
        //     //         prenda = result[i].dataValues.prenda
        //     //         console.log(prenda);
        //     //         console.log(result[i].dataValues.talle);
        //     //     }
        //     //     else if (prenda != result[i].dataValues.prenda){
        //     //         prenda = result[i].dataValues.prenda
        //     //         console.log(prenda);
        //     //         console.log(result[i].dataValues.talle);
        //     //     }
        //     //     else {
        //     //         console.log(result[i].dataValues.talle);
        //     //     }
        //     //     // console.log(result[i].dataValues);
                
        //     // }
            
        // })
        let categorias = db.Categoria.findAll()
        Promise.all([talles,categorias])
        .then(result => {
            let talles = result[0];
            let categorias = result[1];
            return res.render('carga_producto',{talles:talles, categorias:categorias})
        })
        
    },
    select : (req,res) => {
        let productos = db.Producto.findAll()
        let talles = db.Talle.findAll({
            order: [
                ['prenda', 'DESC'],
                ['idtalle', 'ASC']
            ]
        })
        let categorias = db.Categoria.findAll()
        Promise.all([productos,talles,categorias])
        .then(result => {
            let productos = result[0];
            let talles = result[1];
            let categorias = result[2];
            res.render('selectAdmin_producto',{productos:productos,talles:talles, categorias:categorias})
        })
        
    },
    modify : (req,res) => {
        // console.log(req.files);
        // console.log(req.body);
        let updatedProd = {}
        // let talles = req.body.talles.split(',')
        let talles = JSON.parse(req.body.talles)
        let toDelete = talles[0].deleted
        let toAdd = talles[0].added
        let tallesToAdd = [];
        if (req.files.length > 0) {
            updatedProd = {
                nombre: req.body.name,
                descripcion: req.body.desc,
                precio: parseFloat(req.body.price),
                imagen: req.files[0].filename,
                id_categoria: req.body.categoria,
            }
        }
        else {
            updatedProd = {
                nombre: req.body.name,
                descripcion: req.body.desc,
                precio: parseFloat(req.body.price),
                id_categoria: req.body.categoria,
            }
        }
        // console.log(talles);
        let imagen = function(){ db.Imagen.update({
            imagen:req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
            },{
                where:{
                    idimagen:req.body.idImagen
                }
            }
        )}
        let producto = db.Producto.update(updatedProd,{
            where:{
                idproducto: req.params.idProducto
            }
        })
        let deleteTalle = async function() {
            for (let i = 0; i < toDelete.length; i++) {
                db.TalleProducto.destroy({
                    where:{
                        idtalle: toDelete[i],
                        idproducto: req.params.idProducto,
                    }
                })
            }
        }
        for (let i = 0; i < toAdd.length; i++) {
            tallesToAdd.push({idtalle:toAdd[i], idproducto:req.params.idProducto})
        }
        let addTalle = db.TalleProducto.bulkCreate(tallesToAdd)
        console.log(req.files);
        if (req.files.length > 0) {
            console.log("con imagen");
            Promise.all([imagen(),producto,deleteTalle(),addTalle])
            .then(result => {
                console.log(result);
                // console.log("con imagen");
                // return res.redirect('/admin')
                return res.redirect('/admin/edit/selectProduct')
            })
        }
        else {
            console.log("sin imagen");
            Promise.all([producto,deleteTalle(),addTalle])
            .then(result => {
                // console.log("sin imagen");
                console.log(result);
                // return res.redirect('/admin')
                return res.redirect('/admin/edit/selectProduct')
            })
        }
        // console.log(req.body.price);
        // console.log(req.body.idImagen);
        // console.log(req.body.categoria);
        
        // console.log(req.body.talles);
        // console.log(JSON.parse(talles));
        // db.Imagen.findByPk(req.body.idImagen)
        // console.log(updatedProd);
        
        // // let delTalle = db.TalleProducto.
        
        // // console.log(toDelete);
        // // console.log(req.params.idProducto);


        // let addTalle = ;
        // res.redirect('/admin/edit/selectProduct')
    },
    saveDelete : (req,res) => {
        db.Producto.update({
            active: 0
        },{
            where:{
                idproductos: req.params.idProducto
            }
        })
        .then(result => {
            return res.redirect('/admin')
        })
        // for (let i = 0; i < dataProductos.length; i++) {
        //     if (dataProductos[i].id == req.params.idProducto) {
        //         dataProductos[i].active = "no";
        //     }
        // }
        // fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(dataProductos))
        // res.redirect('/admin')
    },
    datosExtras: (req,res) => {
        db.Categoria.findAll({
            raw:true,
            attributes: ['nombre_categoria']
        })
        .then(categorias => {
            // console.log(categorias);
            res.render("carga_datos_extra",{categorias:categorias})
        })
    },
    cargaDatos: (req,res) => {
        // console.log(req.body);
        // let datos = []
        // let crearTalle;
        // let crearCategoria;
        // let crearTemporada;
        if(req.body.nuevoTalle != "" && req.body.nuevaPrenda != ""){
            crearTalle = db.Talle.create({
                talle: req.body.nuevoTalle,
                prenda: req.body.nuevaPrenda,
            })
            // datos.push(req.body.nuevoTalle)
            // datos.push(req.body.nuevaPrenda)
        }
        if(req.body.nuevaCategoria != ""){
            crearCategoria = db.Categoria.create({
                nombre_categoria: req.body.nuevaCategoria
            })
            // datos.push(req.body.nuevaCategoria)
        }
        if(req.body.nuevaTemporada != ""){
            crearTemporada = db.Temporada.create({
                temporada: req.body.nuevaTemporada
            })
            // datos.push(req.body.nuevaTemporada)
        }
        // console.log(datos);
        Promise.all([crearTalle,crearCategoria,crearTemporada])
        .then(result => {
            res.send("Se cargaron los datos")
        })
        // res.send(datos)
    },
    moreImages: (req,res) => {
        if (req.params.idProducto == ':idProducto' || !parseInt(req.params.idProducto)) {
            return res.redirect('/admin/edit/selectProduct')
        }
        db.Producto.findByPk(req.params.idProducto,{include: [
            {association: "imagenes"}
        ]})
        .then(producto => {
            // if (producto == null) {
            //     return res.redirect('admin/edit/selectProduct')
            // }
            // console.log(producto);
            // console.log(producto.dataValues);
            // console.log(producto.dataValues.imagenes[1].dataValues);
            return res.render('moreImages',{producto:producto.dataValues,imagenes:producto.dataValues.imagenes})
        })
    },
    saveMoreIamges: (req,res) => {
        // db.Producto.findAll()
        // .then(result => {
        //     res.render('moreImages',{productos:result})
        // })
        let images = []
        let files = req.files
        // console.log(req.files);
        for (let i = 0; i < files.length; i++) {
            images.push(files[i].filename);
        }
        // db.Imagen.update({},{

        // })
        db.Imagen.findAll({
            raw:true,
            where:{
                idproducto:req.params.idProducto
            }
        })
        .then(imagenes => {
            // console.log(imagenes);
            for (let i = 0; i < images.length; i++) {
                // imagenes[i].imagen = images[i]
                db.Imagen.update(
                    { imagen: images[i] },
                    { where: { idimagen: imagenes[i].idimagen } }
                )
            }
            // console.log(imagenes);
        })
        .then(result => {
            return res.redirect("/admin/edit/selectProduct")
        })
        // console.log(req.params.idProducto);
        // console.log(images);
        // res.send("ok")
    },
};

module.exports = productos;