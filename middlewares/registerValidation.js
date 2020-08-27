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
    // body('email')
    //     .custom((email, {req}) => {
    //         db.Usuario.findOne({
    //             where: {
    //             email: req.body.email,
    //         }})
    //         .then(resultados=> {
    //             console.log(resultados);
    //             if (resultados != null){
    //                 console.log("existe");
    //                 return false;
    //             }
    //             // else{
    //             //     console.log("existe");
    //             //     return false;
    //             // }
    //         })
    //         // let userList = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')), 'utf8');
    //         // for(let i = 0; i < userList.length; i++) {
    //         //         if(userList[i].email == valorDelCampo) {
    //         //             return false;
    //         //         }
    //         //     }
    //         // return true
    //     })
    //     .withMessage('El email utilizado ya pertecene a un usuario registrado!!!!'),
    check('password')
        .isLength({min: 8 , max: 12})
        .withMessage('La contraseña debe tener desde 8 y hasta 12 caracteres')
]
