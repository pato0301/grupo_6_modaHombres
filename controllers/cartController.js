const db = require('../database/models');

const updateOrCreate = (model, whereCond, newItem) => {
    // Try to find record using findOne
    return model.findOne({ where: whereCond })
        .then(item => {
            if (!item) {
                // Item doesn't exist, so we create it
                model.create(newItem)
                .then(addItem => (console.log(addItem)))
            }
            else {
                // Item already exists, so we update it
                return model.update(newItem, {where: whereCond})
                    .then(updateItem => (console.log(updateItem)))
            }
        })
}

module.exports = {
    addProductToCart: function (req,res){
        let temp_cart = req.session.cart
        let cart = req.session.cart
        let countProducts = 0
        let shortDescr = req.body.descripcion.split(".")[0];
        let newProduct = {
            id: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            talle: req.body.talle,
            descripcion:shortDescr,
            imagen: req.body.imagen,
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
                    req.session.numberProducts = req.session.numberProducts - 1;
                    break
                }else{
                    // console.log('entra al else');
                    cartFiltro = cart.filter(producto => parseInt(producto.id) != req.body.idProducto);
                    req.session.numberProducts = req.session.numberProducts - 1;
                    break;
                }
            }   
        }
        req.session.cart = cartFiltro;
        // console.log(req.session.cart);
        res.redirect('/producto/carrito')
    },
    finalizarCompra: (req,res) => {
        // console.log(req.body);
        if (req.body.tipoEnvio == 'sucursal') {
            // console.log("sucursal");
            // console.log(req.session.userClient);
            let salesOrder = {
                nro_factura:'AGBF823KFD83',
                nro_orden: '376',
                precio_total: parseInt(req.body.valorTotal),
                idusuario: req.session.userClient.idusuarios,
            }
            // console.log(salesOrder);
            let cart = req.session.cart;
            req.session.cart = [];
            req.session.numberProducts = 0;
            let soldProduct = []

            // console.log(soldProduct);
            db.Venta.create(salesOrder)
            .then(venta => {
                for (let i = 0; i < cart.length; i++) {
                    let tmp = {
                        idventas: venta.dataValues.idventas,
                        idproductos: parseInt(cart[i].id)
                    }
                    soldProduct.push(tmp)
                }
                db.VentaProducto.bulkCreate(soldProduct)
                .then(result => {
                    // console.log(soldProduct);
                    // console.log(salesOrder);
                    // req.session.cart = []
                    return res.redirect('/producto/carrito')
                })
            })
        }
        else{
            console.log("a domicilio");
            let salesOrder = {
                nro_factura:'AGBF823KFD83',
                nro_orden: '376',
                precio_total: parseInt(req.body.valorTotal),
                idusuario: req.session.userClient.idusuarios,
            }
            let datosDireccion = {
                idusuario: req.session.userClient.idusuarios,
                localidad: req.body.localidad,
                calle: req.body.calle,
                altura: req.body.altura,
                codigo_postal: req.body.codigoPostal,
                pais: 'argentina',
            }
            let whereCond = {
                idusuario:req.session.userClient.idusuarios
            }
            // console.log(salesOrder);
            let cart = req.session.cart;
            req.session.cart = [];
            req.session.numberProducts = 0;
            let soldProduct = []

            // console.log(soldProduct);
            let cargarOrden = db.Venta.create(salesOrder)
                            .then(venta => {
                                for (let i = 0; i < cart.length; i++) {
                                    let tmp = {
                                        idventas: venta.dataValues.idventas,
                                        idproductos: parseInt(cart[i].id)
                                    }
                                    soldProduct.push(tmp)
                                }
                                db.VentaProducto.bulkCreate(soldProduct)
                                .then(result => {
                                    // console.log(soldProduct);
                                    // console.log(salesOrder);
                                    // return res.redirect('/producto/carrito')
                                })
                            })
            let direccion = updateOrCreate(db.Direccion, whereCond, datosDireccion)
            // return res.redirect('/producto/carrito')
            Promise.all([cargarOrden,direccion])
            .then(result => {
                let orden = result[0];
                let adress = result[1];
                return res.redirect('/producto/carrito')
            })
        }
        
    }
}




