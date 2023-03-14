// mongodb+srv://marcos:marcos99@cluster0.fs8pomg.mongodb.net/test
'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var productoRoutes=require('./routes/productos.routes');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(cors()); 
// app.options('*',cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Acess-Control-Allow-Credentials",true);
    next();
});

//comento el siguiente bloque para que se carguen las imágenes
//hay una línea problema para que me de el login 
//     // res.setHeader('Access-Control-Allow-Origin','*'); // esta linea aparece y desaparece el login


app.use((req, res, next) => {
    //allow access to current url. work for https as well
    res.setHeader('Access-Control-Allow-Origin',req.header('Origin'));
    // res.setHeader('Access-Control-Allow-Origin','*'); // esta linea aparece y desaparece el login

    res.removeHeader('x-powered-by');
    //allow access to current method
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('X-Foo', 'bar');
    res.setHeader('Content-Type', 'text/plain');
    next();
});
  
var sessions=require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "miclave1234564asdasdvfgcdfgvszdfsdfdsf",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(cookieParser());
app.use('/',productoRoutes);

module.exports=app;
