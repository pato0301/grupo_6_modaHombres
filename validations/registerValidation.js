const path = require('path');
const fs = require('fs');
const {check, validationResult, body} = require('express-validator');
module.exports = [
    check('email')
        .isEmail()
        .withMessage('Debe ingresar un mail válido'),
    body('email')
        .custom(function(valorDelCampo) {
            let userList = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')), 'utf8');
            for(let i = 0; i < userList.length; i++) {
                    if(userList[i].email == valorDelCampo) {
                        return false;
                    }
                }
            return true
        })
        .withMessage('El email utilizado ya pertecene a un usuario registrado'),
    check('password')
        .isLength({min: 8 , max: 12})
        .withMessage('La contraseña debe tener desde 8 y hasta 12 caracteres')
]
