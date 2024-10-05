class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fecha = data.fecha;
        this.hora = data.hora;
        this.estatus = data.estatus || "vendido"; // Estatus por defecto "vendido"
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set hora(hora) {
        this._hora = hora;
    }

    set estatus(estatus) {
        const validStatuses = ["vendido", "cancelado"];
        if (validStatuses.includes(estatus)) {
            this._estatus = estatus;
        } else {
            console.error("El estatus no es válido");
        }
    }

    // Getters
    get id() {
        return this._id;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get idProducto() {
        return this._idProducto;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get estatus() {
        return this._estatus;
    }

    // Devuelve un objeto con o sin 'id', dependiendo de si el 'id' está definido
    get getVenta() {
        const conId = {
            id: this.id,
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fecha: this.fecha,
            hora: this.hora,
            estatus: this.estatus
        };

        const sinId = {
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fecha: this.fecha,
            hora: this.hora,
            estatus: this.estatus
        };

        return this.id === undefined ? sinId : conId;
    }
}

module.exports = Venta;
