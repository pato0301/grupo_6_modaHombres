const path = require('path');
const fs = require('fs');
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json')),'utf8')
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json')),'utf8')

module.exports = {
    detalleProd : (req,res) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id){
                return res.status(200).json(products[i])
            }
        }
        return res.status(400)
    }
}