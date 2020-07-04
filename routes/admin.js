const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Rutas Necesarias
// router.get('/')

router.get('/carga-producto', adminController.carga);

module.exports = router;