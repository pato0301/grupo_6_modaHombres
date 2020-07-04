const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rutas Necesarias
router.get('/', mainController.root);
router.get('/search', mainController.search);

module.exports = router;