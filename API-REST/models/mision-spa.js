'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MisionSchema = Schema({
	descripcion: String
});

module.exports = mongoose.model('Mision', MisionSchema);

