'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipoSchema = Schema({
	nombre: String,
	apellido: String,
	puesto: String,
	facebook: String, 
	twitter: String,
	linkedin: String,
	detalle: String
});

module.exports = mongoose.model('Equipo', EquipoSchema);