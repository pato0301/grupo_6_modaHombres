const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
//const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
router.get('/', usersController.root)


module.exports = router;