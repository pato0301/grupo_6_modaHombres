const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Rutas Necesarias
router.get('/', registerController.root);
router.get('/registro', registerController.registro);

module.exports = router;