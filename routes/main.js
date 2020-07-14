const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rutas Necesarias
router.get('/', mainController.root);
router.get('/search', mainController.search);
router.get('/login', mainController.login);
router.post('/login', mainController.checkLogIn);
router.get('/register', mainController.register);
router.post('/register', mainController.checkRegister);

module.exports = router;