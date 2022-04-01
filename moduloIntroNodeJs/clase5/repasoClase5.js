
let fs = require("fs");

let amigos = ["Coco", "Pablito", "Sus", "Franco"];

let amigosJSON = JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJSON);

/* console.log(amigos);
console.log("--------");
console.log(amigosJSON);
console.log("--------");
console.log(amigosOriginal); */

let tareasJson = fs.readFileSync("tareas.json", 'utf-8');

let tareas = JSON.parse(tareasJson);

/* console.table(tareas); */

// -------- Métodos de string --------

let nombre = "Guido Maimone";

/* console.log(nombre);
console.log("-----"); */

// length!!!
/* console.log(nombre.length != 0); */

// trim
/* console.log(nombre.trim()); */

// slice
/* console.log(nombre.slice(7)); */

// indexOf
/* console.log(nombre.indexOf("Maimone")); */

// split
/* console.table(nombre.split(" ")); */

// replace
/* console.log(nombre.replace("Guido","Jose")); */



// -------- Objetos literales!! --------

let perro = {
    patas: 4,
    nombre: "Firulais",
    hijos: ["hijo1", "hijo2", "hijo3"],
    ladrar: function(){
        return "Guau"
    },
    ladrarInteligente: function(){
        return this.nombre
    },
};

perro.nombre = "Guffy";
perro.apellido = "Mouse";
/* console.log(perro); */
/* console.log(perro.ladrar()) */
/* console.log(perro.ladrarInteligente()) */
/* console.log(perro.hijos[2]) */



// -------- Arrow functions --------

// Funciones cortas
let funcionNormal = function (parametro1){
    return "El parametro recibido es: " + parametro1
};

let arrowFunction = parametro1 => "El parametro recibido es: " + parametro1;

let arrowFunction2 = parametro1 => "El parametro recibido es: " + parametro1;

/* console.log(arrowFunction("Pato")); */

//Funciones extensas
let funcionNormalExtensa = function (parametro1, parametro2){
    let combinacion = parametro1 + parametro2;
    return "La combinación de los parametros es: " + combinacion;
};

let arrowFunctionExtensa = (parametro1, parametro2) =>{
    let combinacion = parametro1 + parametro2;
    return "La combinación de los parametros es: " + combinacion
};

/* console.log(arrowFunctionExtensa("Pato", "Ganso")); */



// -------- If ternario --------

// condicion ? TRUE : FALSE

let fruta = "manzana";

let resultado = (fruta == "naranja" ? "Me encanta!" : "");

/* console.log(resultado); */



// -------- Switch!! --------

let dia = "jueves";

/* switch(dia){
    case "lunes":
    case "miercoles":
    case "viernes":
        console.log("Tenemos clase");
        break;
    case "sabado":
        console.log("Estudiar JS");
        break;
    case "domingo":
        console.log("Descansar");
        break;
    default:
        console.log("Escriba una opción válida");
        break;
} */

// -------- Ciclo for --------

let nombres = ["Coco", "Pablito", "Sus", "Franco"];

/* for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
} */