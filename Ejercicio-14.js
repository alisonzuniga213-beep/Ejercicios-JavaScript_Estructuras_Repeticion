/*Imprimir una tabla de m filas por n columnas con un caracter dado*/

const prompt =require ("prompt-sync")();

let m = Number(prompt("Ingrese la cantidad de filas: "));
let n = Number(prompt("Ingrese la cantidad de columnas: "));
let caracter = prompt("Ingrese el carácter que desea imprimir: ");

// Recorre las filas
for (let i = 1; i <= m; i++) {

    let fila = ""; // Variable para almacenar la fila actual

    // Recorre las columnas
    for (let j = 1; j <= n; j++) {
        fila = fila + caracter + " "; // Agrega el carácter a la fila
    }
    console.log(fila); //  imprime la fila completa
}

