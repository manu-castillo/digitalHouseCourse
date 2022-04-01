let funcionesDeTareas = require("./funcionesDeTareas");

let accion = "listar"; // variable donde se modifica las acciones a entrar en el switch

switch (accion) {
    case "listar":
        // codigo
        console.log(funcionesDeTareas.leerArchivo());
        break;

    case "":
        // codigo
        console.log("Atención - Tienes que pasar una acción")
        break;

    default:
        // codigo
        console.log("No entiendo qué quieres hacer.")
        break;
}