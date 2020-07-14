const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rutas Necesarias
router.get('/', adminController.carga);
// router.get('/carga-producto', adminController.carga);
router.post('/', adminController.agregar);
// router.post('/carga-producto', adminController.agregar);
router.put('/', adminController.modify);
// router.put('/carga-producto', adminController.modify);
router.delete('/', adminController.delete);
// router.delete('/carga-producto', adminController.delete);

module.exports = router;