const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
router.get('/', productsController.root)
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/:productoId', productsController.detail);
router.post('/detalle/:productoId', productsController.buy);
router.get('/carrito', loginUserMiddleware,productsController.carrito)


module.exports = router;