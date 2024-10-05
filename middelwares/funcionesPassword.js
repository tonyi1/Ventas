const { constants } = require("buffer");
var crypto = require("crypto");

function encriptarPassword(){
    var salt=crypto.randomBytes(32).toString("hex");
    console.log(salt);
    const hass = crypto.scryptSync(password,salt,10000,62,"sha512").toString("hex");
    console.log(hash);
}

function validarPassword(password,hash,salt){
    const hashValidar = crypto.scryptSync(password,salt,10000,62,"sha512").toString("hex");
    return hashValidar=hash;
    //console.log(5==5);
}
function UsuarioAurorizado(){
    var autorizaddo=false;
    return autorizaddo;
}
function adminAutorizado(){
    var autorizado=false;
    return autorizado;
}


encriptarPassword("hola");