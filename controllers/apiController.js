const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const multer = require('multer');
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname ,'../public/images/producto'))
    },
    filename: function (req, file, cb) {
      // cb(null,`avatars_${req.body.email}_${Date.now() + path.extname(file.originalname)}`)
        cb(null,`img_${req.body.name}_${path.extname(file.originalname)}`)
        console.log("guardo imagen");
    }
}) 
let upload = multer({ storage: storage })


module.exports = {
    detalleProd : (req,res) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id){
                return res.status(200).json(products[i])
            }
        }
        return res.status(400)
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
        let newProduct = {
            nombre: req.body.nombreProducto,
            descripcion: req.body.descriptionProd,
            precio: parseFloat(req.body.precioProducto),
            imagen: req.file.filename,
            id_categoria: 1,
            active: 1
        }
        // console.log(newProduct);
        db.Producto.create(newProduct)
        .then(result => {
            // console.log(result);
            let respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Producto creado',
                // respuesta: usuario
            }
            return res.send(JSON.stringify(respuesta))
        })
        .catch((error) => {
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
    }
}