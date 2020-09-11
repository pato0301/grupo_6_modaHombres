const db = require('../database/models');
module.exports = {
    addProductToCart: function (req,res){
        let cart = req.session.cart
        let newProduct = {
            id: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            talle: req.body.talle,
            cantidad: 1
        }
        for (let i = 0; i < cart.length; index++) {
            if (cart[i].id == req.body.id) {
                cart[i].cantidad = cart[i].cantidad + 1 
            }
            else {
                cart.push(newProduct)
            }
            
        }
        console.log(newProduct);
        res.redirect('/')
    }
}




