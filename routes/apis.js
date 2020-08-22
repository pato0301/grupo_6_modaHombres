const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/product/detalle/:id', apiController.detalleProd);

module.exports = router;