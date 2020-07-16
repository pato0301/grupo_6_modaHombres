const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rutas Necesarias
router.get('/', adminController.carga);
// router.get('/carga-producto', adminController.carga);
router.post('/', adminController.agregar);
// router.post('/carga-producto', adminController.agregar);

router.get('/edit/selectProduct', adminController.select);
router.get('/delete/selectProduct', adminController.select);
router.get('/edit/selectProduct/:idProducto', adminController.edit);
router.get('/delete/selectProduct/:idProducto', adminController.delete);

// router.get('/edit', adminController.edit);
router.put('/edit', adminController.modify);
// router.put('/carga-producto', adminController.modify);
// router.get('/delete', adminController.delete);
router.delete('/delete', adminController.saveDelete);
// router.delete('/carga-producto', adminController.delete);

module.exports = router;