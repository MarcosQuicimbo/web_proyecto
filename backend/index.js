'use strict'
var mongoose=require('mongoose');
var port='3900';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/Araza_Heladeria')
.then(()=>{
    console.log("Conexion establecida con la bdd");
    app.listen(port,()=>{
        console.log("Conexion establecida en el url: localhost:3900");
    })
})
.catch(err=>console.log(err))