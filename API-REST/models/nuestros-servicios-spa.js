'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiciosSchema = Schema({
	descripcion: String
});

module.exports = mongoose.model('Servicios', ServiciosSchema);