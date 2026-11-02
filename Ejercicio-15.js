/*Construir un patron de rombo de asteriscos usando un solo for*/

// Número de filas de la mitad de arriba
let n = 5;

// Recorre las filas del rombo 
for (let i = 1; i <= 2 * n - 1; i++) {

    // Variable que almacena cada fila
    let fila = "";

    // Calcula la cantidad de asteriscos
    let cantidad;

    if (i <= n) {
        cantidad = 2 * i - 1;
    } else {
        cantidad = 2 * (2 * n - i) - 1;
    }

    // Calcula los espacios necesarios para centrar los asteriscos
    let espacios = (2 * n - 1 - cantidad) / 2;

    // repeat(espacios) repite el espacio en blanco la cantidad de veces indicada
    fila = " ".repeat(espacios);

    // repeat(cantidad) repite el asterisco la cantidad de veces indicada
    fila = fila + "*".repeat(cantidad);

    // Imprime la fila completa
    console.log(fila);
}