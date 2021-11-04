const express = require('express');
const path = require('path');
const routes = require('./routes');

// Creacion de la app de express
const app = express();

// Configuracion del puerto
app.listen(process.env.PORT || 5000);

// Habilitar pug
app.set('view engine', 'pug');

// Carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configurando las rutas
app.use('/', routes());