const path = require('path');

const registro = {
    root : (req,res) => {
        res.render('index')
    },
    registro : (req,res) => {
        res.render('registro')
    },
    
};

module.exports = registro;