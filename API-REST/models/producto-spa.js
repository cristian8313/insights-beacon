'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
	titulo: String,
	imagen: String,
	detalle: String
});

module.exports = mongoose.model('Producto', ProductoSchema);