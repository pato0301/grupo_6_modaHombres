const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rutas Necesarias
router.get('/', adminController.root);
router.get('/carga-producto', adminController.carga);
router.post('/carga-producto', adminController.agregar);
router.put('/carga-producto', adminController.modify);
router.delete('/carga-producto', adminController.delete);

module.exports = router;