'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImagenSchema = Schema({
	titulo: String,
	imagen: String
});

module.exports = mongoose.model('Imagen', ImagenSchema);