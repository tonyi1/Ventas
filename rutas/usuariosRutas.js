var rutas = require("express").Router();
var {mostrarUsuarios,nuevoUsuario,buscarPorID,borrarUsuario}=require("../BD/usuariosBD");
var { mostrarProductos, buscarPorIdProducto, eliminarProducto, newProduct } = require("../BD/productosBD");
var { mostrarVentas, buscarPorIdVenta, actualizarVenta, insertarVenta } = require("../BD/ventasBD");

rutas.get("/",async(req,res)=>{
    //res.send("hola estas en raiz");
    var usuarioValido=await mostrarUsuarios();
    //console.log(usuarioValido);
    res.json(usuarioValido);
});

rutas.get("/buscarPorID:id",async(req,res)=>{
    var usuarioValido=await buscarPorID(req.params.id);
    res.json(usuarioValido);

});
rutas.get("/borrarUsuario",async(req,res)=>{
    var usuarioBorrado=await rutas.delete;
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    var usuarioValido=await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

// Ruta para mostrar todos los productos
rutas.get("/productos", async (req, res) => {
    var productosValidos = await mostrarProductos();
    res.json(productosValidos);
});

// Ruta para buscar un producto por ID
rutas.get("/buscarPorIdProducto/:id", async (req, res) => {
    var productoValido = await buscarPorIdProducto(req.params.id);
    res.json(productoValido);
});

// Ruta para eliminar un producto por ID
rutas.delete("/borrarProducto/:id", async (req, res) => {
    var productoBorrado = await eliminarProducto(req.params.id);
    res.json(productoBorrado);
});

// Ruta para crear un nuevo producto
rutas.post("/nuevoProducto", async (req, res) => {
    var productoValido = await newProduct(req.body);
    res.json(productoValido);
});

// Rutas para ventas
rutas.get("/mostrarVenta", async (req, res) => {
    var ventasValidas = await mostrarVentas();
    res.json(ventasValidas);
});

rutas.get("/buscarPorIdVenta/:id", async (req, res) => {
    var ventaValida = await buscarPorIdVenta(req.params.id);
    res.json(ventaValida);
});

rutas.patch("/actualizarVenta/:id", async (req, res) => {
    var ventaActualizada = await actualizarVenta(req.params.id, req.body);
    res.json(ventaActualizada);
});

rutas.post("/insertarVenta", async (req, res) => {
    var ventaValida = await insertarVenta(req.body);
    res.json(ventaValida);
});

module.exports=rutas;