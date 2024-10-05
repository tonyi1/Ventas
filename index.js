const express=require("express");
const usuarioRutas=require("./rutas/usuariosRutas");

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/", usuarioRutas);

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost"+port);
});