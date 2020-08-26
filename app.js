const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const {check, validationResult, body} = require('express-validator');
const cookieParser = require('cookie-parser');

const productRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const mainRouter = require('./routes/main');
const apiRouter = require('./routes/apis')
const userRouter = require('./routes/users')


const cookieUser = require ("./middlewares/cookieUser")

// Configuro Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

// Configuro Carpeta Public para Imagenes y CSS
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Metodo Put y Delete 
app.use(methodOverride('_method'));



// Cookie
app.use(cookieParser());
// app.use(cookieUser);

// Session
app.use(session({secret : 'el poder del ecommerce'}))

app.use('/', mainRouter);
app.use('/producto', productRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter)
app.use('/user', userRouter)


app.listen(3000, () => console.log('servidor corriendo en puerto 3000'));

// ************ exports app ************
module.exports = app;