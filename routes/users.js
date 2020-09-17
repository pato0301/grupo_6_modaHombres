const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const categoriasMiddleware = require('../middlewares/categoriasMiddleware');
//const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
router.get('/', categoriasMiddleware,usersController.root)


module.exports = router;