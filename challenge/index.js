const autos = require("./autos");


const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        const busqueda = autos.find(auto => auto.patente == patente);
        return busqueda || null;
    },
    venderAuto: function(patente){
        this.buscarAuto(patente).vendido = true;
        return this.buscarAuto(patente);
    },
    autosParaLaVenta: function(){
        const ventas = autos.filter(autos => autos.vendido === false);
        return ventas;
    },
    autos0KM: function(){
        const disponibles = this.autosParaLaVenta()
        const venta = disponibles.filter(disponibles => disponibles.km < 100 || disponibles.km == 0);
        return venta;
    },
    listaDeVentas: function(){
        // Primero hacemos un array con los autos vendidos
        let autosVendidos = autos.filter(auto => auto.vendido === true);
        const gananciasVentas = autosVendidos.map(function(autosVendidos){
            return autosVendidos.precio;
        });
        return gananciasVentas;
    },
    totalDeVentas: function(){
        let lista = this.listaDeVentas();
        let reductor = (accumulator, currentValue) => accumulator + currentValue;
        if(lista.length != undefined){
            const totalVentas = lista.reduce(reductor);
            return totalVentas;
        }else{
            return 0;
        }
    },
    puedeComprar: function(auto,persona){
        let costoTotal = persona.capacidadDePagoTotal >= auto.precio;
        let capacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas;
        return (capacidadDePagoEnCuotas && costoTotal);
    },
    autosQuePuedeComprar: function(persona){
        let arrayDisponibles = this.autosParaLaVenta();
        const puedeComprarLista = arrayDisponibles.filter(auto => persona.capacidadDePagoTotal >= auto.precio && 
            persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas);
        return puedeComprarLista;
    }
};