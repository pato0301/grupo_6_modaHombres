const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const productos = require('./adminController');
const { Op } = require("sequelize");

module.exports = {
    detalleProd : (req,res) => {
        // db.Producto.findByPk(req.params.id,{include: [
        //     // {model: db.TalleProducto, as: 'talleProducto'} 
        //     // {association: "talleProducto"}
        //     {association: "talles",
        //     }
        // ]})
        // .then(result => {
        //     console.log(result.datavalues);
        // })
        db.Producto.findByPk(req.params.id,{
            // paranoid: false,
            include: [{association: "talles"},{association: "imagenes"}],
            // include: [{association: "talles", where: { idtalle: {[Op.not]: 33} }},{association: "imagenes"}],
        })
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(errors => {
            return res.status(400).json(errors)
        })
    },
    cargaNewProd: (req,res,next) => {
        // console.log(req.file);
        // console.log(req.body);
        // let newProduct = {
        //     // id: products.length + 1,
        //     name: req.body.name,
        //     description: req.body.description,
        //     price: req.body.price,
        //     discount: 0,
        //     images: req.body.image,
        //     // image: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
        //     category: "in-sale",
        //     active: "si"
        // }
        // console.log(req.body.talles);
        // console.log(req.body.talles.length);
        // console.log(typeof req.body.talles);
        let talles = typeof req.body.talles == "string"? [req.body.talles ] : req.body.talles 
        let array_talles = []
        let imagenes = []
        console.log(req.body.currentSeason);
        console.log(req.files);
        if (req.files != undefined && req.files.length > 0) {
            imagenes.push(req.files[0].filename);
            imagenes.push("default_avatar.png");
            imagenes.push("default_avatar.png");
        }
        else {
            imagenes.push("default_avatar.png");
            imagenes.push("default_avatar.png");
            imagenes.push("default_avatar.png");
        }
        console.log(imagenes);
        // for (let i = 0; i < talles.length; i++) {
        //     let talle_prod = {
        //         idtalle: talles[i]} 
        //     array_talles.push(talle_prod)
        // }
        // console.log(array_talles);
        let newProduct = {
            nombre: req.body.nombreProducto,
            descripcion: req.body.descriptionProd,
            precio: parseFloat(req.body.precioProducto),
            imagen: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
            // imagen: req.file.filename,
            // talles: array_talles,
            current_season: req.body.currentSeason == "on"? 1:0,
            id_categoria: req.body.categoria,
            active: req.body.active == "on"? 1:0
        }
        // console.log(newProduct);
        db.Producto.create(newProduct)
        .then(product => {
            // console.log("imprimo resultado");
            // console.log(product.dataValues);
            for (let i = 0; i < talles.length; i++) {
                let talle_prod = {
                    idtalle: parseInt(talles[i]),
                    idproducto: product.dataValues.idproducto} 
                array_talles.push(talle_prod)
            }
            // console.log(array_talles);
            let createTalle = db.TalleProducto.bulkCreate(array_talles)
            // .then(result => {
            //     // product.dataValues.talles = result.dataValues
            //     let respuesta = {
            //         error: false,
            //         codigo: 200,
            //         mensaje: 'Producto creado',
            //         // respuesta: usuario
            //     }
            //     // console.log(product.dataValues);
            //     return res.send(JSON.stringify(respuesta))
            // })
            let newImagenes = []
            for (let i = 0; i < imagenes.length; i++) {
                let tmpImg = {
                    idproducto:product.dataValues.idproducto,
                    imagen:imagenes[i],
                }
                newImagenes.push(tmpImg)
            }
            let createImages = db.Imagen.bulkCreate(newImagenes)
            Promise.all([createTalle,createImages])
            .then(result => {
                let respuesta = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Producto creado',
                        // respuesta: usuario
                    }
                return res.send(JSON.stringify(respuesta))
            })
        })
        .catch((error) => {
            console.log(error);
            return res.send(JSON.stringify(error))
        })
        // products.push(newproduct)
        // fs.writeFile(Sync(path.join(__dirname,'../data/productos.json'),JSON.stringify(products))
        // let respuesta = {
        //     error: false,
        //     codigo: 200,
        //     mensaje: 'Producto creado',
        //     respuesta: newProduct
        // }
        // return res.send(JSON.stringify(respuesta))
    },
    searchProd: (req,res) => {
        // console.log(req.params.keyWord);
        let productos = db.Producto.findAll({
            raw:true,
            where:{
                [Op.or]:[
                    { nombre: {[Op.substring]:req.params.keyWord}},
                    { descripcion: {[Op.substring]:req.params.keyWord}}
                ]
            },
            limit : 5,
            // include: [
            //     {association: "categorias",
            //         // where: {
            //         //     nombre_categoria: {[Op.substring]:req.params.keyWord}
            //         // }
            //     }
            // ],
        })
        // .then(products => {
        //     for (let i = 0; i < products.length; i++) {
        //         let searchResult = {
        //             result: products[i].nombre
        //         }
        //     }
        //     console.log(products[0]);
        // })
        let categorias = db.Categoria.findAll({
            raw:true,
            where:{
                [Op.or]:[
                    { nombre_categoria: {[Op.substring]:req.params.keyWord}}
                ]
            },
            limit : 5
        })
        let searchResult = []
        let searchJson = []
        Promise.all([productos,categorias])
        .then(result => {
            let prodRes = result[0]
            let catRes = result[1]
            for (let i = 0; i < prodRes.length; i++) {
                if(!searchResult.includes(prodRes[i].nombre)){
                    searchResult.push(prodRes[i].nombre)
                }
            }
            for (let i = 0; i < catRes.length; i++) {
                if(!searchResult.includes(catRes[i].nombre_categoria)){
                    searchResult.push(catRes[i].nombre_categoria)
                }
            }
            // for (let i = 0; i < searchResult.length; i++) {
            //     searchJson.push({result:searchResult[i]})
            // }
            console.log(searchResult);
            // console.log(searchJson);
            // res.status(200).json(searchJson)
            res.status(200).json(searchResult)
        })
        // res.status(200).json(searchJson)
    }
}

    