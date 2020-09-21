const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Debe ingresar un mail válido'),
    body('email')
        .custom(function(value) {
            return db.Usuario.findOne(
                {
                    where: {email: value}
                })
                .then(function(result) {
                    if(result) {
                        return Promise.reject('El email utilizado ya pertecene a un usuario registrado')
                    }
                })
        }),
    check('password')
        .isLength({min: 8 , max: 12})
        .withMessage('La contraseña debe tener desde 8 y hasta 12 caracteres')
]
