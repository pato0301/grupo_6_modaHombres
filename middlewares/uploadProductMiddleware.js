const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname ,'../public/images/producto'))
    },
    filename: function (req, file, cb) {
      // cb(null,`avatars_${req.body.email}_${Date.now() + path.extname(file.originalname)}`)
      cb(null,`modelo_prueba${path.extname(file.originalname)}`)
    }
  }
  ) 
let upload = multer({ storage: storage })

// console.log("guarde archivo");

module.exports = upload;