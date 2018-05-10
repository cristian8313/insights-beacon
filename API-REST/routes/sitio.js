'use strict'
 
var express = require('express');
var EquipoController = require('../controllers/sitio');
var api = express.Router();
 
api.get('/equipo/:id', EquipoController.getEquipo);
api.get('/equipos', EquipoController.getEquipos);
api.post('/equipo', EquipoController.saveEquipo);
api.put('/equipo/:id', EquipoController.updateEquipo);
api.delete('/equipo/:id', EquipoController.deleteEquipo);

module.exports = api;