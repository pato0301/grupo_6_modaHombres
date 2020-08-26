const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const uploadProdImageMiddleware = require('../middlewares/uploadProductMiddleware');
const loginAdminMiddleware = require('../middlewares/loginAdminMiddleware')

// Rutas Necesarias
router.get('/', loginAdminMiddleware,adminController.carga);
// router.get('/carga-producto', adminController.carga);
// router.post('/', uploadProdImageMiddleware.any(),adminController.agregar);
// router.post('/carga-producto', adminController.agregar);

router.get('/login', adminController.root);
router.post('/login', adminController.loginAdmin);
router.get('/register', adminController.register);
router.post('/register', adminController.saveAdmin);

router.get('/edit/selectProduct', loginAdminMiddleware, adminController.select);
router.get('/delete/selectProduct', loginAdminMiddleware, adminController.select);
// router.get('/edit/selectProduct/:idProducto', loginAdminMiddleware, adminController.edit);
// router.get('/delete/selectProduct/:idProducto', loginAdminMiddleware, adminController.delete);

// router.get('/edit', adminController.edit);
router.put('/edit/selectProduct/:idProducto', uploadProdImageMiddleware.any(),adminController.modify);
// router.put('/carga-producto', adminController.modify);
// router.get('/delete', adminController.delete);
router.delete('/delete/selectProduct/:idProducto', adminController.saveDelete);
// router.delete('/carga-producto', adminController.delete);

module.exports = router;