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
    },
    carrito: function (req,res){
        let total = 0;
        if (req.session.cart == undefined) {
            req.session.cart = []
        }
        for(let i = 0; i < req.session.cart.length; i++){
            total = total + (req.session.cart[i].cantidad * req.session.cart[i].price);
        }
        res.render('carrito' , {
            user:req.session.userClient,
            categorias: req.session.categorias,
            numberProducts:req.session.numberProducts,
            productos: req.session.cart,
            totalPrice: total,
        })
    },
    deleteCart: function (req,res){
        let cartFiltro;
        let cart = req.session.cart;
        // console.log(req.body.idProducto);
        // console.log(cart);
        for (let i = 0; i < cart.length; i++){
            if(cart[i].id == req.body.idProducto){
                if(cart[i].cantidad > 1){
                    cart[i].cantidad - 1;
                }else{
                    // console.log('entra al else');
                    cartFiltro = cart.filter(producto => parseInt(producto.id) != req.body.idProducto);
                    break;
                }
            }   
        }
        req.session.cart = cartFiltro;
        // console.log(req.session.cart);
        res.redirect('/producto/carrito')
    },
    finalizarCompra: (req,res) => {
        console.log(req.body);
        if (req.body.tipoEnvio == 'sucursal') {
            console.log("sucursal");
            return res.redirect('/producto/carrito')
        }
        else{
            console.log("a domicilio");
            return res.redirect('/producto/carrito')
        }
        
    }
}




