const path = require('path');

const productos = {
    carga : (req,res) => {
        res.render('carga_producto')
    }
};

module.exports = productos;