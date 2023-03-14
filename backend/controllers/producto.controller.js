//aqui están los métodos para el producto de la farmacia CRUD 
'use strict'
var Producto=require('../models/producto');
var Contacto = require('../models/contacto');
var path=require('path');
var fs = require('fs');
var controller={
    inicio:function(req,res){
        return res.status(201).send("<h1>Hola 2</h1>");
    },
    //para obtener los productos 
    getProductos:function(req,res){
        Producto.find({}).sort().exec((err,productos)=>{//es una promesa, me da dos tipos, error-> caso malo, libros-> caso bueno 
            if (err) return res.status(500).send({message:'Error al recuperar los datos'});
            if(!productos) return res.status(404).send({message:'No hay productos para mostrar'});
            return res.status(200).send({productos});
        })

    },
    //para ingresar un producto al sistema
    saveProducto:function(req,res){
        var producto=new Producto();
        var params=req.body;//en el params viene todo lo que contiene el html "body"
        producto.nombre=params.nombre;//hago el match entre este método y lo que obtengo del body
        producto.stock=params.stock;
        producto.precio=params.precio;
        producto.categoria=params.categoria;
        producto.subcategoria=params.subcategoria;
        producto.proveedor= params.proveedor; 
        //tipo de metodo que usa .save()
        producto.save((err,productoGuardado)=>{//promesa; error-> caso1; defino: libroGuardado-> caso2
            if (err) return res.status(500).send({message:'Error al guardar'});
            if(!productoGuardado) return res.status(404).send({message:'No se ha guardado el producto'});
            return res.status(200).send({producto:productoGuardado});
        })
    },
    getProducto:function(req,res){
        var productoId = req.params.id;//necesito un ID para recuperar un libro en contreto 
        if (productoId==null) return res.status(500).send({message:'El producto no existe'});
        Producto.findById(productoId,(err,producto)=>{
            if(err) return res.status(500).send({message:'No hay productos para mostrar'});
            if(!Producto) return res.status(404).send({message:'producto no existe'});
            return res.status(200).send({producto});
        })
    }, 
    deleteLibro:function(req,res){
        var productoId = req.params.id;
        Producto.findByIdAndRemove(productoId,(err,productoBorrado)=>{
            if(err) return res.status(500).send({message:'Error al borrar los datos'});
            if(!productoBorrado) return res.status(404).send({message:'No se puede borrar el producto'});
            return res.status(200).send({producto:productoBorrado});
        })
    }, 
    updateProducto:function(req,res){
        var productoid = req.params.id;
        var update = req.body;

        Producto.findByIdAndUpdate(productoid,update,{new:true},(err, productoUpdated)=>{
            if(err) return res.status(500).send({message:'Error al actualizar producto'});
            if(!productoUpdated) return res.status(404).send({message:'El producto no existe para actualizarse'});
            return res.status(200).send({producto:productoUpdated});
        })
    },
    uploadImagen:function(req,res){
        var productoid = req.params.id;
        var fileName = 'Imagen no subida';
        if (req.files){
            var filePath = req.files.imagen.path;
            var file_split = filePath.split('\\');
            var fileName = file_split[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Producto.findByIdAndUpdate(productoid,{imagen:fileName},{new:true},(err, productoUpdated)=>{
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!productoUpdated) return res.status(404).send({message:'El producto no existe y no se subio la imagen'});
                    return res.status(200).send({producto:productoUpdated});
                })
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension no es valida'});
                });
            } 
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImagen:function(req, res){
        var file = req.params.imagen;
        var path_file = "./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:'No existe la imagen'});
            }
        })
    },
    getProductoNombre:function(req, res){
        var productoId=req.params.id;
        console.log(productoId)
        if(productoId==null) return res.status(404).send({message:'El producto no existe'})

        Producto.find({nombre: productoId}).sort().exec((err, productos)=>{
            if (err) return res.status(500).send({message:'Error al recuperar los datos'})
            if(!productos) return res.status(404).send({message: 'No hay productos para mostrar'})
            if(productos.length == 0) return res.status(404).send({message: 'No hay productos con ese nombre para mostrar'})
            return res.status(200).send({productos});    
        })
    },
    saveContacto:function(req,res){
        var contacto=new Contacto();
        var params=req.body;//en el params viene todo lo que contiene el html "body"
        contacto.nombre=params.nombre;//hago el match entre este método y lo que obtengo del body
        contacto.correo=params.correo;
        contacto.mensaje=params.mensaje;
       
        //tipo de metodo que usa .save()
        contacto.save((err,contactoGuardado)=>{//promesa; error-> caso1; defino: libroGuardado-> caso2
            if (err) return res.status(500).send({message:'Error al guardar'});
            if(!contactoGuardado) return res.status(404).send({message:'No se ha guardado el producto'});
            return res.status(200).send({contacto:contactoGuardado});
        })
    }
}
module.exports=controller;