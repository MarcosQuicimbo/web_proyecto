'use strict'
var express=require('express');
var router=express.Router();
var productoController=require('../controllers/producto.controller');
var usuarioController=require('../controllers/usuario.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});
//pagina de inicio
router.get('/inicio',productoController.inicio);
//guardar un producto
router.post('/guardar-producto',productoController.saveProducto);
//guardar un contacto
router.post('/guardar-contacto',productoController.saveContacto);
//ver todos los producto
router.get('/productos',productoController.getProductos);
//ver datos de un producto
router.get('/producto/:id',productoController.getProducto);
//eliminar un producto
router.delete('/producto/:id',productoController.deleteLibro);
//actulizar un producto
router.put('/producto/:id',productoController.updateProducto);
//agregar una imagen producto
router.post('/subir-imagen/:id',mutipartyMiddleWare,productoController.uploadImagen);
//recuperar la imagen libros
router.get('/get-imagen/:imagen',productoController.getImagen);
//buscar producto por nombre
router.get('/producto-nombre/:id',productoController.getProductoNombre);

router.post('/create-user',usuarioController.saveUsuario);
router.post('/login',usuarioController.login);
router.get('/logout',usuarioController.logout);
router.get('/login',usuarioController.getLogin);
router.get('/visitas',usuarioController.visits);

module.exports=router;