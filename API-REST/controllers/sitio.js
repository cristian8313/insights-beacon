'use strict'

var Equipo = require('../models/equipo-spa');
var Novedad = require('../models/novedad-spa');
var Home = require('../models/home-spa');
var Contacto = require('../models/contacto');
var Mision = require('../models/mision-spa');
var NuestrosServicios = require('../models/mision-spa');
var Producto = require('../models/mision-spa');

// **************************  PRODUCTOS ********************************

function getProducto(req, res){
	var productoId = req.params.id;

	Producto.findById(productoId, function(err, producto){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!producto){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({producto});
		}
	});	
}

function getProductos(req, res){
	Producto.find({}).sort('-_id').exec((err, productos) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}else{
			if (!productos){
				res.status(404).send({message: 'No hay marcadores'});
			}else{
				res.status(200).send({productos});
			}
		}
	});
	
}

function saveProducto(req, res){
	var producto = new Contacto();

	var params = req.body;
	
	producto.titulo = params.titulo;
	producto.imagen = params.imagen;
	producto.detalle = params.detalle;

	producto.save((err, productoStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({producto: productoStored});
		}
	});

}

function updateProducto(req, res){
	var productoId = req.params.id;
	var update = req.body;

	Producto.findByIdAndUpdate(productoId, update, {new:true}, (err, productoUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({producto: productoUpdated});
		}
	});
	
}

function deleteProducto(req, res){
	var productoId = req.params.id;

	Producto.findById(productoId, function(err, producto){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!producto){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			producto.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar'});	
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
		
	});	
	
}

// **************************   NUESTROS SERVICIOS ********************************

function getNuestrosServicios(req, res){
	var nuestrosServiciosId = req.params.id;

	NuestrosServicios.findById(nuestrosServiciosId, function(err, nuestrosServicios){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!nuestrosServicios){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({nuestrosServicios});
		}
	});	
}

function saveMision(req, res){
	var nuestrosServicios = new Mision();

	var params = req.body;
	
	nuestrosServicios.descripcion = params.descripcion;

	nuestrosServicios.save((err, nuestrosServiciosStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({mision: nuestrosServiciosStored});
		}
	});

}

function updateMision(req, res){
	var nuestrosServiciosId = req.params.id;
	var update = req.body;

	NuestrosServicios.findByIdAndUpdate(nuestrosServiciosId, update, {new:true}, (err, nuestrosServiciosUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({nuestrosServicios: nuestrosServiciosUpdated});
		}
	});
	
}
// **************************   MISION ********************************

function getMision(req, res){
	var misionId = req.params.id;

	Contacto.findById(misionId, function(err, mision){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!mision){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({mision});
		}
	});	
}

function saveMision(req, res){
	var mision = new Mision();

	var params = req.body;
	
	mision.descripcion = params.descripcion;

	mision.save((err, misionStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({mision: misionStored});
		}
	});

}

function updateMision(req, res){
	var misionId = req.params.id;
	var update = req.body;

	Novedad.findByIdAndUpdate(misionId, update, {new:true}, (err, misionUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({mision: misionUpdated});
		}
	});
	
}

// **************************   CONTACTOS ********************************

function getContacto(req, res){
	var contactoId = req.params.id;

	Contacto.findById(contactoId, function(err, contacto){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!home){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({contacto});
		}
	});	
}

function getContactos(req, res){
	Contacto.find({}).sort('-_id').exec((err, contactos) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}else{
			if (!contactos){
				res.status(404).send({message: 'No hay marcadores'});
			}else{
				res.status(200).send({contactos});
			}
		}
	});
	
}

function saveContacto(req, res){
	var contacto = new Contacto();

	var params = req.body;
	
	home.descripcion = params.descripcion;

	contacto.save((err, contactoStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({contacto: contactoStored});
		}
	});

}

function updateContacto(req, res){
	var contactoId = req.params.id;
	var update = req.body;

	Novedad.findByIdAndUpdate(contactoId, update, {new:true}, (err, contactoUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({contacto: contactoUpdated});
		}
	});
	
}

function deleteContacto(req, res){
	var contactoId = req.params.id;

	Contacto.findById(contactoId, function(err, contacto){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!contacto){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			contacto.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar'});	
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
		
	});	
	
}

// **************************   HOME ********************************

function getHome(req, res){
	var homeId = req.params.id;

	Home.findById(homeId, function(err, home){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!home){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({home});
		}
	});	
}

function getHomes(req, res){
	Home.find({}).sort('-_id').exec((err, homes) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}else{
			if (!homes){
				res.status(404).send({message: 'No hay marcadores'});
			}else{
				res.status(200).send({homes});
			}
		}
	});
	
}

function saveHome(req, res){
	var home = new Home();

	var params = req.body;
	
	home.descripcion = params.descripcion;

	home.save((err, homeStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({home: homeStored});
		}
	});

}

function updateHome(req, res){
	var homeId = req.params.id;
	var update = req.body;

	Novedad.findByIdAndUpdate(homeId, update, {new:true}, (err, homeUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({home: homeUpdated});
		}
	});
	
}

function deleteHome(req, res){
	var homeId = req.params.id;

	Home.findById(homeId, function(err, home){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!home){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			home.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar'});	
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
		
	});	
	
}

// **************************   NOVEDAD ********************************

function getNovedad(req, res){
	var novedadId = req.params.id;

	Novedad.findById(novedadId, function(err, novedad){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!novedad){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({novedad});
		}
	});	
}


function getNovedades(req, res){
	Novedad.find({}).sort('-_id').exec((err, novedades) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}else{
			if (!novedades){
				res.status(404).send({message: 'No hay marcadores'});
			}else{
				res.status(200).send({novedades});
			}
		}
	});
	
}

function saveNovedad(req, res){
	var novedad = new Novedad();

	var params = req.body;
	
	novedad.titulo = params.titulo;
	novedad.fecha = params.fecha;
	novedad.descripcion = params.descripcion;
	novedad.imagen = params.imagen;

	novedad.save((err, novedadStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({equipo: novedadStored});
		}
	});

}

function updateNovedad(req, res){
	var novedadId = req.params.id;
	var update = req.body;

	Novedad.findByIdAndUpdate(novedadId, update, {new:true}, (err, novedadUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({novedad: novedadUpdated});
		}
	});
	
}

function deleteNovedad(req, res){
	var novedadId = req.params.id;

	Novedad.findById(novedadId, function(err, novedad){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!novedad){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			novedad.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar'});	
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
		
	});	
	
}

// **************************   EQUIPO ********************************

function getEquipo(req, res){
	var equipoId = req.params.id;

	Equipo.findById(equipoId, function(err, equipo){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!equipo){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			res.status(200).send({equipo});
		}
		
	});	

}


function getEquipos(req, res){
	Equipo.find({}).sort('-_id').exec((err, equipos) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}else{
			if (!equipos){
				res.status(404).send({message: 'No hay marcadores'});
			}else{
				res.status(200).send({equipos});
			}
		}
	});
	
}


function saveEquipo(req, res){
	var equipo = new Equipo();

	var params = req.body;
	
	equipo.nombre = params.nombre;
	equipo.apellido = params.apellido;
    equipo.puesto = params.puesto;
    equipo.facebook = params.facebook;
	equipo.twitter = params.twitter;
	equipo.linkedin = params.linkedin;
    equipo.detalle = params.detalle;

	equipo.save((err, equipoStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({equipo: equipoStored});
		}
	});

}

function updateEquipo(req, res){
	var equipoId = req.params.id;
	var update = req.body;

	Equipo.findByIdAndUpdate(equipoId, update, {new:true}, (err, equipoUpdated) =>{
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}else{
			res.status(200).send({equipo: equipoUpdated});
		}
	});
	
}

function deleteEquipo(req, res){
	var equipoId = req.params.id;

	Equipo.findById(equipoId, function(err, equipo){
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!equipo){
			res.status(404).send({message: 'No hay marcadores'});
		}else{
			equipo.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar'});	
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
		
	});	
	
}

module.exports = {
	getEquipo,
	getEquipos,
	saveEquipo,
	updateEquipo,
	deleteEquipo
}
