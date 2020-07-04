const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas Necesarias
router.get('/', productsController.root)
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/', productsController.detail);
router.post('/detalle/', productsController.buy);

module.exports = router;