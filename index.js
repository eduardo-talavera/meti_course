const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const router = require('./routes');


require('dotenv').config({path: 'variables.env'});

const app = express();

// Habilitar EJS como template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// ubicacion vistas
app.set('views', path.join(__dirname, './views'));

// Archivos estaticos
app.use(express.static('public'));


// Middleware (usuario Logueado, flash mesages, fecha actual)
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();
    
    next();
});


//Routing
app.use('/', router());



// Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor esta funcionando...');
});