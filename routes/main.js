const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const registerValidation = require('../middlewares/registerValidation');
const loginValidation = require('../middlewares/loginValidation');
const cookieUser = require("../middlewares/cookieUser");


// Rutas Necesarias
router.get('/', mainController.root);
router.get('/search', mainController.search);
router.get('/login', mainController.login);
router.post('/login', loginValidation, mainController.checkLogIn);
router.get('/register', mainController.register);
router.post('/register', registerValidation, uploadImageMiddleware.any(), mainController.checkRegister);
// router.post('/register', uploadImageMiddleware.any(), mainController.checkRegister);

module.exports = router;