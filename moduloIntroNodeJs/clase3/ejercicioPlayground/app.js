const SALUDO = "Hola, soy ";
const PASATIEMPO = ", disfruto ";
const LUGAR = " y soy de ";

let carlosF = require("./carlos_fabrissin.js");
let manuC = require("./manuel_castillo.js");
let miguelG = require('./miguel_garcia.js');
let rodrigoP = require("./rodrigo_peralta.js");

let equipo = [carlosF, manuC, miguelG, rodrigoP];

for (let i = 0; i < equipo.length; i++) {
    console.log(SALUDO + equipo[i][0] + PASATIEMPO + equipo[i][1] + LUGAR + equipo[i][2]);
}


//const zodiac = require('../zodiac-signs')('en');

//console.log(zodiac.getSymbols());
//console.log(zodiac.getSignByName('cancer'));