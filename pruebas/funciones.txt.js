function saludar(){
    console.log("Hola");
}
saludar ();

function saludar2(nombre){
    console.log("Hola "+ nombre);
}

saludar2("juan Perez");

function saludar3(nombre){
    var s=("Hola "+ nombre);
    return s;
}
 
var saludo=()=>{
console.log(saludar3("juancho"));
}
saludo("pinganito");

var saludo2=()=>{
    console.log(saludar3("juancho"));
    }
saludo2();

var saludar3=nombre=>{
    return "hola " + nombre;
}
console.log (saludar3("tenganito"));

//*var saludar4=nombre=>"Hola "+nombre;
//*console.log(saludar4("pancho"));

//*console.log(nombre=>"hola"+nombre);

//*var saludar5=function 

var saludo6=()=>{
    console.log("saludo6");
}

var saludo7=(nombre, s)=>{
    console.log("HOla"+nombre);
    s();
}