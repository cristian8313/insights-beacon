'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NovedadSchema = Schema({
    titulo: String,
    fecha: String,
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model('Novedad', NovedadSchema);