const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const categoriasMiddleware = require('../middlewares/categoriasMiddleware');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
//const loginUserMiddleware = require('../middlewares/loginUserMiddleware')

// Rutas Necesarias
router.get('/', categoriasMiddleware,usersController.root)
router.put('/', uploadImageMiddleware.any(),usersController.updateUser)
// router.post('/', uploadImageMiddleware,usersController.updateUser)


module.exports = router;