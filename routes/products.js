const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas Necesarias
// router.get('/')
// router.get('/detalle/:productId', productsController.detail);
router.get('/detalle/', productsController.detail);

module.exports = router;