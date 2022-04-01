let operaciones = {
    sumar: function (numeroA, numeroB){
        return numeroA + numeroB;
    },
    restar: function (numeroA, numeroB){
        return numeroA - numeroB;
    },
    multiplicar: function (numeroA, numeroB){
        if ((numeroA === 0 || numeroB === 0)){
            return "cero";
        }
        return numeroA * numeroB;
    },
    dividir: function (numeroA, numeroB){
        if ((numeroA ==0 || numeroB == 0)){
            return "No se puede dividir por cero";
        }else{
            return numeroA / numeroB;
        }
    }
}