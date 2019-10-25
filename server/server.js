require('./config/')
const express = require('express'); //constante para conectar con el paquete express
const app=express(); //creamos el objeto con el valor de la pqueteria 
const bodyParser=require('body-parse');
app.use(bodyParser.urlencded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res) =>{
res.json('hola israel');
});
app.get('/usuario',(req,res) =>{
    res.json('hola israel');
    });
    app.get('/usuario/:id/:nombre',(req,res) =>{
        let id=req.params.id; //req es o que manda el cliente y el res es el que manda el servidor 
        let nombre=req.params.nombre;
        res.json({
            id,
            nombre
        })
        });
    app.put('/usuario',(req,res) =>{
        res.json('hola israel');
        });
    app.post('/usuario',(req,res) =>{
        let nombre=req.body.nombre;
        let edad=req.body.edad;
        if(nombre===undefined){
            res.status(400).json({
                ok:'false',
                err:'el nimbre es necesario'
            })
        }else{
            res.json({
                nombre,
                edad
            })
        }
        });
        app.delete('/usuario',(req,res) =>{
            res.json('hola israel');
            });
app.listen(3000,()=>{
    console.log('escuchado por el puerto 300');
});
