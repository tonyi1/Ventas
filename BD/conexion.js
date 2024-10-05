const admin =require("firebase-admin");
const keys=require("../keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const proyecto=admin.firestore();

const usuarios=proyecto.collection("miEJEMPLO");
const productos=proyecto.collection("productos");

console.log(
    usuarios,
    productos
);
