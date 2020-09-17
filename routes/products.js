const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');
const categoriasMiddleware = require('../middlewares/categoriasMiddleware');
const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
// router.get('/', productsController.root)
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/:productoId', categoriasMiddleware,productsController.detail);
router.post('/detalle/:productoId', loginUserMiddleware,cartController.addProductToCart);
router.get('/carrito', categoriasMiddleware,loginUserMiddleware,cartController.carrito);
router.post('/carrito/finalizar/compra', cartController.finalizarCompra);
router.post('/carrito/:idProducto', cartController.deleteCart);
router.get('/categoria/:idCategoria',categoriasMiddleware,productsController.categoria)


module.exports = router;