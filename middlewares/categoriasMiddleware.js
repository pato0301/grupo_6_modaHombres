const db = require('../database/models');

function categorias (req,res,next) {
    if(req.session.categorias == undefined) {
        let categoria = db.Categoria.findAll()
        Promise.all([categoria])
        .then(result => {
            let categorias = []
            for (let i = 0; i < result[0].length; i++) {
                let temp = {
                    id: result[0][i].idcategorias,
                    categoria: result[0][i].nombre_categoria
                }
                categorias.push(temp)
            }
            req.session.categorias = categorias
            return next()
        })
    }
    else {
        next();
    } 
}

module.exports = categorias;