const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname ,'../../public/uploads/avatars'))
    },
    filename: function (req, file, cb) {
      cb(null,`avatars_${req.body.email}_${Date.now() + path.extname(file.originalname)}`);
    }
  }) 
let upload = multer({ storage: storage })

module.exports = upload;