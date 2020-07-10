const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

// Rutas Necesarias
router.get('/', shoppingCartController.root);
router.get('/carga', shoppingCartController.carga);


module.exports = router;