const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const { Op } = require("sequelize");
const db = require('../database/models');

const main = {
    root: (req,res) => {
        let latest = db.Producto.findAll({
            // raw: true,
            where: {
                active: 1,
                current_season:1
            },
            limit : 4,
            include: [
                {association: "imagenes"}
            ],
            order: [
                ['created_at', 'DESC'],
            ],
        })
        let season = db.Producto.findAll({
            where: {
                active: 1,
                current_season:1
            },
            limit : 4,
            include: [
                {association: "imagenes"}
            ]
        })
        let categoria = db.Categoria.findAll()
        Promise.all([latest,season,categoria])
        .then(result => {
            // console.log(`latest: ${result[0]}`);
            // console.log(`season: ${result[1]}`);
            // console.log(`categoria: ${result[2][0].dataValues.idcategorias}`);
            let categorias = []
            for (let i = 0; i < result[2].length; i++) {
                let temp = {
                    id: result[2][i].idcategorias,
                    categoria: result[2][i].nombre_categoria
                }
                categorias.push(temp)
            }
            let productsLatest =  result[0];
            let productsSeason = result[1];
            req.session.categorias = categorias
            // res.send("Se cargaron los datos")
            res.render('homeMain',{
                user:req.session.userClient,productsSeason:productsSeason,productsLatest:productsLatest,
                categorias: req.session.categorias,
                numberProducts:req.session.numberProducts
            })
        })
        // res.render('homeMain',{user:req.session.userClient})
    },
    search:(req,res) => {
        let productSearched = db.Producto.findAll({
            // raw:true,
            where:{
                [Op.or]:[
                    { nombre: {[Op.substring]:req.query.keywords}},
                    { descripcion: {[Op.substring]:req.query.keywords}}
                ]
            },
            limit : 8,
            include: [
                {association: "imagenes"}
            ]
        })
        let allProd = db.Producto.findAll({
            where: {
                active: 1
            },
            include: [
                {association: "imagenes"}
            ]
        })
        let uniqueProduct = []
        let searchedProducts = []
        Promise.all([productSearched,allProd])
        .then(result => {
            let buscados = result[0];
            let productosExtras = result[1];
            for (let i = 0; i < buscados.length; i++) {
                uniqueProduct.push(buscados[i].dataValues.nombre)
                searchedProducts.push(buscados[i].dataValues)
            }
            if (searchedProducts.length < 8) {
                for (let i = 0; i < productosExtras.length; i++) {
                    if (searchedProducts.length >= 8) {
                        break;
                    }
                    if (!uniqueProduct.includes(productosExtras[i].dataValues.nombre)) {
                        uniqueProduct.push(productosExtras[i].dataValues.nombre)
                        searchedProducts.push(productosExtras[i].dataValues)
                    }
                }
            }
            // console.log(result[0][1].dataValues.imagenes[1]);
            // res.send(result[0][1].dataValues)
            console.log(searchedProducts);
            res.render('searched',{user:req.session.userClient,products:searchedProducts,
                                    categorias: req.session.categorias,
                                    numberProducts:req.session.numberProducts})
            // res.render('searched',{user:req.session.userClient,products:result[0]})
            // res.send(req.query.keywords)
        })
        // res.send(req.query)
        // res.redirect('/')
    },
    login: (req,res) => {
        res.render('loginMain',{user:req.session.userClient,
                                categorias: req.session.categorias,
                                numberProducts:req.session.numberProducts})
    },
    checkLogIn:function(req,res,next) {
        let errors = validationResult(req);
        // console.log(errors);
        if(errors.isEmpty()) {
            db.Usuario.findOne({
                where: {
                email: req.body.email,
            }})
            .then(resultados=> {
                if (resultados != null) {
                    // console.log(resultados.dataValues);
                    if (bcrypt.compareSync(req.body.password,resultados.dataValues.password)){
                        req.session.userClient = resultados.dataValues;
                        req.session.cart = [] 
                        if (req.body.remember =="on") {
                            res.cookie("userCookie", resultados.dataValues.email, {maxAge: 1000 * 60  } )
                            // el max age de la cookie esta en milisegundos.... toda esa cuenta seria un año nose cuanto tiempo deberia durar
                        }
                        return res.redirect('/')
                    }
                    return res.render('loginMain',{errors:{email:{msg:"credenciales invalidas, no coincide el mail con la contraseña"}}
                                                ,user:req.session.userClient,
                                                categorias: req.session.categorias,
                                                numberProducts:req.session.numberProducts})
                }
                else{
                    return res.render('loginMain',{errors:{email:{msg:"credenciales invalidas, no coincide el mail con la contraseña"}}
                                                ,user:req.session.userClient
                                                ,categorias: req.session.categorias,
                                                numberProducts:req.session.numberProducts})
                }
            })
        }else{
            return res.render('loginMain' ,{
                errors: errors.mapped(), old: req.body,
                user:req.session.userClient,
                categorias: req.session.categorias,
                numberProducts:req.session.numberProducts
            })
        }
    },
    register: (req,res) => {
        res.render('registro',{user:req.session.userClient,numberProducts:req.session.numberProducts})
    },
    checkRegister: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            console.log(req.files);
            let newUser = {
                username : req.body.username,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                avatar: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
                altura : req.body.altura == ''? null : req.body.altura,
                peso : req.body.peso == ''? null : req.body.peso,
            }
            db.Usuario.create(newUser);
            req.session.userClient = newUser
            res.redirect('/login');
        }else{
            res.render('registro' , {
                errors: errors.mapped(),
                user:req.session.userClient
                ,categorias: req.session.categorias,
                numberProducts:req.session.numberProducts
            })
        }
    },
    user: (req,res) => {
        res.render("userInfo",{ user:req.session.userClient, 
                                categorias: req.session.categorias,
                                numberProducts:req.session.numberProducts})
    }
}

module.exports = main;