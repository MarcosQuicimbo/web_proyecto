'use strict'
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var ContactoSchema = Schema({
    nombre:String,
    correo: String, 
    mensaje: String
 })
 module.exports = mongoose.model('Producto', ContactoSchema);
