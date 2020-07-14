const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas Necesarias
router.get('/', productsController.root)
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/:productoId', productsController.detail);
router.post('/detalle/:productoId', productsController.buy);
router.get('/carrito', productsController.carrito)


module.exports = router;