const {check, validationResult, body} = require('express-validator');
module.exports = [
    check('email')
        .isEmpty()
        .withMessage('Debe ingresar un mail válido'),
    check('password')
        .isLength({min: 8 , max: 12})
        .withMessage('La contraseña debe tener desde 8 y hasta 12 caracteres')
]