const path = require('path');

const productos = {
    detail : (req,res) => {
        res.render('detalle_producto')
    }
};

module.exports = productos;