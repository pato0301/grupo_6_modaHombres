const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

// Rutas Necesarias
router.get('/', mainController.root);
router.get('/search', mainController.search);
router.get('/login', mainController.login);
router.post('/login', loginValidation, mainController.checkLogIn);
router.get('/register', mainController.register);
router.post('/register', uploadImageMiddleware.any() , registerValidation, mainController.checkRegister);

module.exports = router;