let funcionesDeTareas = {
    leerArchivo: function (){

    // Logica de leer
    // Requiriendo el modulo nativo file system
    const fs = require("fs");

    //Utilizo el metodo readFileSync para leer el archivo Json
    let tareasJson = fs.readFileSync("tareas.json", "utf-8");

    //Convertir el Json a el tipo de dato que corresponda
    let tareas = JSON.parse(tareasJson);
    // fin logica de leer

    return tareas;
    }
}

module.exports = funcionesDeTareas;