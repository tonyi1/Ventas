const usuariosBD=require("./conexion".usuario);
const Usuario=require("../Modelos/UsuarioModelo");
const {encriptarPassword,validarPassword,UsuarioAurorizado,adminAutorizado }=require("../middelwares/funcionesPassword");

function validarDato(usuario){
    if(usuario.nombre !=undefined && usuario.usuario !=undefined && usuario.password!=undefined)
    return usuario;
    return null;
};

async function mostrarUsuarios(){
    const usuario= await usuariosBD.get();
    //console.log(usuario);
    listaUsuarios=[];
    usuario.forEach(usuario => {
        const validar=new Usuario({id:usuario.id,...usuario.data()});
        if(validarDato(usuario1.getUsuario)){
            listaUsuarios.push(validar.data());
        }
        //console.log(validar);
        
    });
};

async function buscarPorID(id) {
    const usuario=await usuariosBD.doc(id).get();
    const usuario1=new Usuario(usuario);
    //console.log(usuario1.getUsuario) ;  
    if (validarDato(usuario.getUsuario)){
        usurioValido=usuario1.getUsuario
    }
    return usuarioValido;
};

async function nuevoUsuario(data) {
    const {salt,hash}=encriptarPassword(data.password);
    data.password=hash;
    data.salt=salt;
    data.tipoUsuaruio="usuario";
    const usuario1=new Usuario(data);
    //console.log(usuario1.getUsuario);
    var usuarioValido=false;
    if(validarDato(usuario1.getUsuario)){
        await usuariosBD.doc().set(usuario1.getUsuario);
        usuarioValido=true;
    }
    return usuarioValido;
}
async function borrarUsuario(id) {
    console.log(buscarPorID(id));
    var usuarioValido=await buscarPorID(id);
    var usuarioBorrado=false
    if (usuarioValido){
        await usuariosBD.doc(id).delete();
        usuarioBorrado=true;
    }
    return usuarioBorrado;
};
module.exports={
    mostrarUsuarios,
    nuevoUsuario,
    borrarUsuario,
    buscarPorID
};
data={
    nombre:"Javi",
    usuario:"Lolito FHZ",
    password:"yolo"

}
mostrarUsuarios();

