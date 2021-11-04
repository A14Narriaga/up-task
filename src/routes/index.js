const express = require('express');
const router = express.Router();

const proyectosController = require('../controllers/proyectosController');

module.exports = function () {

	router.get('/', proyectosController.proyectosHome)

	return router;
}

//------------------------> Rutas
// router.use() // Corre cualquier request
// router.get() // Get request
// router.post() // Post request
//------------------------> Rutas

//------------------------> Responses
// res.send() // Basic
// res.json() // Json
// res.render() // HTML
//------------------------> Responses