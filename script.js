Console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 1. Función declarativa: consumo mensual en kWh
function obtenerConsumo() {
    if (consumoGuardado === 0) {
        let valor = parseFloat(prompt("Ingresa el consumo mensual en kilovatio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el consumo en kilovatio:"));
        }
        consumoGuardado = valor;
    }
    return consumoGuardado;
} 
obtenerConsumo()

// 2. Función declarativa: tarifa por kWh
function obtenerTarifa() {
    if (tarifaGuardada === 0) {
        let valor = parseFloat(prompt("Ingresa la tarifa por kilovatio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa la tarifa:"));
        }
        tarifaGuardada = valor;
    }
    return tarifaGuardada;
}
obtenerTarifa()

// 3. Función de expresión: cargo fijo por servicio
const obtenerCargoFijo = function () {
    if (cargoFijoGuardado === 0) {
        let valor = parseFloat(prompt("Ingrese el cargo fijo por servicio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el cargo fijo:"));
        }
        cargoFijoGuardado = valor;
    }
    return cargoFijoGuardado;
}  
obtenerCargoFijo()
// 4. Función de expresión: porcentaje de IVA
const obtenerPorcentajeIVA = function () {
    if (porcentajeIVAGuardado === 0) {
        let valor = parseFloat(prompt("Ingrese el porcentaje de IVA (%):"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el IVA (número positivo):"));
        }
        porcentajeIVAGuardado = valor;
    }
    return porcentajeIVAGuardado;
}
obtenerPorcentajeIVA


// 5. Función flecha: calcular subtotal (consumo × tarifa)
const calcularSubtotal = () => {
    const consumo = obtenerConsumo();
    const tarifa = obtenerTarifa();
    return consumo * tarifa;
}
