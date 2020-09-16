const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');
const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
// router.get('/', productsController.root)
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/:productoId', productsController.detail);
router.post('/detalle/:productoId', loginUserMiddleware,cartController.addProductToCart);
router.get('/carrito', loginUserMiddleware,productsController.carrito)

router.get('/categoria/:idCategoria',productsController.categoria)


module.exports = router;