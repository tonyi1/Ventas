const ventasBD = require("./conexion").ventas; // Referencia a la colección de ventas en la BD
const Venta = require("../modelos/VentaModelo"); // Modelo para Venta
const { buscarPorID: buscarUsuarioPorID } = require("./usuariosBD"); // Función para buscar usuarios
const { buscarPorIdProducto } = require("./productosBD"); // Función para buscar productos

// Función para validar datos de la venta
function validarDatosVenta(venta) {
    var valido = true;

    // Verificamos que los campos idUsuario, idProducto, fecha, hora y estatus están definidos
    if (!venta.idUsuario || !venta.idProducto || !venta.fecha || !venta.hora || !venta.estatus) {
        valido = false;
    }

    return valido;
}

// Función para crear una nueva venta
async function nuevaVenta(data) {
    // Asignamos "vendido" como el estatus predeterminado
    data.estatus = "vendido";

    // Validamos que el usuario y el producto existan antes de registrar la venta
    const usuarioValido = await buscarUsuarioPorID(data.idUsuario);
    const productoValido = await buscarPorIdProducto(data.idProducto);

    if (usuarioValido && productoValido) {
        const venta1 = new Venta(data);
        var ventaValida = false;

        if (validarDatosVenta(venta1.getVenta)) {
            // Guardamos la nueva venta en la base de datos
            await ventasBD.doc().set(venta1.getVenta);
            ventaValida = true;
        }

        return ventaValida;
    } else {
        console.error("Usuario o Producto no válidos");
        return false;
    }
}

// Función para cancelar una venta (cambiar estatus a "cancelado")
async function cancelarVenta(id) {
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        venta1.getVenta.estatus = "cancelado"; // Cambiamos el estatus a cancelado
        await ventasBD.doc(id).update(venta1.getVenta); // Actualizamos la venta en la base de datos
        return true;
    } else {
        console.error("Venta no encontrada");
        return false;
    }
}

// Función para mostrar todas las ventas
async function mostrarVentas() {
    const ventas = await ventasBD.get(); // Obtener las ventas de la BD
    const ventasValidas = [];

    ventas.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        if (validarDatosVenta(venta1.getVenta)) {
            ventasValidas.push(venta1.getVenta);
        }
    });

    return ventasValidas; // Devolvemos las ventas válidas
}

// Exportamos las funciones
module.exports = {
    nuevaVenta,
    cancelarVenta,
    mostrarVentas
};
