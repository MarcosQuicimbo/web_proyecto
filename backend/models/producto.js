'use strict'
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var ProductoSchema = Schema({
    nombre:String,
    stock:String,
    precio:String,
    categoria:String,
    subcategoria:String,
    proveedor:String,
    imagen:String
 })
 module.exports = mongoose.model('Producto', ProductoSchema);
