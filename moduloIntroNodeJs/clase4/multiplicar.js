function multiplicar (numeroA, numeroB){
    if ((numeroA === 0 || numeroB === 0)){
        return "cero";
    }
    return numeroA * numeroB;
    
}
module.exports = multiplicar;