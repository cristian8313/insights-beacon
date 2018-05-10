'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactoSchema = Schema({
	direccion: String,
	ciudad: String,
	pais: String,
	telefono1: String, 
	telefono2: String,
	facebook: String,
	twitter: String,
	linkedin: String,
	email: String
});

module.exports = mongoose.model('Contacto', ContactoSchema);