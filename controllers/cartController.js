const db = require('../database/models');
module.exports = {
    addProductToCart: function (req,res){
        let temp_cart = req.session.cart
        let cart = req.session.cart
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
                console.log("entro en for");
                if (cart[i].id == req.body.id) {
                    console.log("entro en if");
                    cart[i].cantidad = cart[i].cantidad + 1 
                    break
                }
                else {
                    console.log("entro en else");
                    cart.push(newProduct)
                    break
                }
                
            }
        }
        req.session.cart = cart
        console.log(cart);
        res.redirect('/')
    }
}




