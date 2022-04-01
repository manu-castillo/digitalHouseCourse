//  ----- Variables (let, const) -----

let anio = 2022;
const nombreDelProfe = "Lucas";

/* console.log(nombreDelProfe);
nombreDelProfe = "Guido";
console.log(nombreDelProfe); */


// ----- Tipos de datos -----

 
//string
let aString = 'Natalia "1234560,.!#%&(¨[]';

//number
const pi = 3.14;

//boolean
let boolean1 = true;
let boolean2 = false;

//arrays
let alumnos = ["Alejandro", "Jonatan"];
/* console.log(alumnos); */

//null
let especial = null;

//undefined
let especial2;
/* console.log(especial2);
especial2 = 20;
console.log(especial2); */

//nan
let especial3 = 4 * ["pato", "ganso"];
/* console.log(especial3); */




// ----- Objetos literales -----


let perro = {
    patas: 4,
    nombre: "Firulais",
    duenios: ["dueño1", "dueño2"],
    cachorro: {
        patas: 4,
        nombre: "Bart"
    }
};

/* console.log("El perro tiene " + perro.cachorro + " patas");
console.log(perro.cachorro); */



// ----- Operadores -----

// Asignación
let miNombre = "Guido";

// Aritméticos
// +, -, *, /, %, ++, --

let resultado1 = 10 + 2;
let resultado2 = 10 - 2;
let resultado3 = 10 * 2;
let resultado4 = 10 / 2;
let resultado5 = 11 % 2;

++resultado1;
/* resultado = resultado + 1 */
/* resultado += 1 */

/* --resultado1; */

/* console.log(resultado1) */

// Comparación
// ==, ===, !=, !==

let comparacion1 = 10 == "15"; //---> Igualdad
let comparacion2 = 10 != 15; //---> Desigualdad

let comparacion3 = 10 === "10";
let comparacion4 = 10 !== 10;

/* console.log(comparacion3) */

// Relacionales
// >, >=, <, <=

let relacion1 = 7 > 3;
let relacion2 = 7 >= 3;
let relacion3 = 7 < 3;
let relacion4 = 7 <= 3;

/* console.log(relacion1) */

// Lógicos

// and
let logico1 = (10 > 15) && (10 == 20);

// or
let logico2 = (10 < 15) || (10 != 20);

/* console.log(logico1) */

// ----- Funciones -----

// Declaración

const multiplicar = function (parametro1, parametro2) {
    return parametro1 * parametro2
};

// Ejecucion (dentro del console.log)

/* console.log(multiplicar(5,3)); */




// ----- Condicionales -----

// if

/* if(4 < 5){
    console.log("El primer numero es mayor que el segundo")
} */

// else

/* if(4 > 5){
    console.log("El primer numero es mayor que el segundo")
} else {
    console.log("El primer numero es menor que el segundo")
} */

// elseif

/* if(4 > 5){
    console.log("El primer numero es mayor que el segundo")
} else if(4 > 0) {
    console.log("El primer numero es positivo")
} */

// ----- Arrays y métodos de arrays -----



// push!!
/* nombres.push("Pablo", "Maria");
console.table(nombres); */

// pop
/* let nombre = nombres.pop();
console.log(nombre);
console.table(nombres); */

// unshift
/* nombres.unshift("Pablo", "Maria");
console.table(nombres); */

// shift
/* let nombre2 = nombres.shift();
console.log(nombre2);
console.table(nombres); */

// includes
/* console.log(nombres.includes("Alejandro")); */

// indexOf
/* console.log(nombres.indexOf("apshfoif"));
console.table(nombres); */

let nombres = ["Angelika", "Alejandro", "Lucas", "Lucas", "Lucas", "Andrea"];

// join
/* console.log(nombres.join(" * ")); */