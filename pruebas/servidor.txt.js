const express = require("express");
require("dotenv").config();
const app=express();

//middelware
var saludo=(req,res,next)=>{
    console.log("hola");
    next();
}


app.get("/",saludo,(req,res)=>{
    res.send("hola mundo")
})

app.get("/",saludo,(req,res)=>{
    res.send("hola en home")
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});