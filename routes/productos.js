const express = require('express');
const router = express.Router();
const path = require('path');
const productos = require(path.resolve(__dirname, '../controllers/productosController'));

router.get('/',productos.index);

router.get('/:idProducto',productos.unProducto);

module.exports = router;