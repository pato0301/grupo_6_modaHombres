const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const uploadProdImageMiddleware = require('../middlewares/uploadProductMiddleware');

router.get('/product/detalle/:id',apiController.detalleProd);
router.post('/product/newProduct', uploadProdImageMiddleware.single('productImage'),apiController.cargaNewProd);

module.exports = router;