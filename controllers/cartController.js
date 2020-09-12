const db = require('../database/models');
module.exports = {
    addProductToCart: function (req,res){
        let temp_cart = req.session.cart
        let cart = req.session.cart
        let countProducts = 0
        let newProduct = {
            id: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            talle: req.body.talle,
            cantidad: 1
        }
        if (cart.length == 0) {
            cart.push(newProduct)
        }
        else{
            for (let i = 0; i < temp_cart.length; i++) {
                if (cart[i].id == req.body.id) {
                    cart[i].cantidad = cart[i].cantidad + 1 
                    break
                }
                else {
                    cart.push(newProduct)
                    break
                }
                
            }
        }
        for (let i = 0; i < cart.length; i++) {
            countProducts = countProducts + cart[i].cantidad
        }
        req.session.cart = cart
        req.session.numberProducts = countProducts
        res.redirect('/')
    }
}




