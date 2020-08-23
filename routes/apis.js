const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/product/detalle/:id', apiController.detalleProd);
router.post('/product/newProduct', apiController.cargaNewProd);

module.exports = router;