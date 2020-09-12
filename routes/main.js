const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const usersController = require('../controllers/usersController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const registerValidation = require('../middlewares/registerValidation');
const loginValidation = require('../middlewares/loginValidation');
const categoriasMiddleware = require('../middlewares/categoriasMiddleware');
const cookieUser = require("../middlewares/cookieUser");


// Rutas Necesarias
router.get('/', categoriasMiddleware,mainController.root);
router.get('/search', mainController.search);
router.get('/login', categoriasMiddleware,cookieUser,mainController.login);
router.post('/login', loginValidation, mainController.checkLogIn);
router.get('/register', categoriasMiddleware,mainController.register);
router.post('/register', uploadImageMiddleware.any(), registerValidation,mainController.checkRegister);
// router.post('/register', uploadImageMiddleware.any(), mainController.checkRegister);
router.get('/user', mainController.user);
router.put('/user', mainController.root);
router.get('/usuarios', usersController.root);
module.exports = router;