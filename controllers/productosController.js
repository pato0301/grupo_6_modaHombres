const fs = require('fs');
const path = require('path');
const productoJSON = fs.readFileSync(path.resolve(__dirname,'../data/productos.json'));
const productoData = JSON.parse(productoJSON);

let productos = {
    index: function (req,res) {
        res.send("Index de la pagina producto");
    },
    unProducto: function (req,res) {
        productoData.forEach(element => {
            if(element.id == req.params.idProducto){
                res.write(`Producto id: ${element.id}\n`)
                res.write("\n")
                res.write(`Nombre: ${element.name}\n`)
                res.write("\n")
                res.write(`Descripcion: ${element.description}\n`)
                res.write("\n")
                res.write(`Precio: ${element.price}\n`)
                res.write("\n")
                res.write(`Descuento: ${element.discount}\n`)
                res.write("\n")
                res.write(`Imagen: ${element.image}\n`)
                res.write("\n")
                res.write(`Categoria: ${element.category}\n`)
                res.write("\n")
                res.end("\n");
            }
        });
    },
};

module.exports = productos;