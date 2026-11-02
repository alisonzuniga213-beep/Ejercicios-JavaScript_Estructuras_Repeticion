/*Solicitar un valor n y generar la piramide numerica correspondiente*/

const prompt = require("prompt-sync")();

let n = prompt("Número de filas ");
    

for (let i = 1; i <= n; i++) {
    let fila = "";

    // Espacios de la izquierda
    for (let e = 1; e <= n - i; e++) {
        fila += " ";
    }

    // Números de la pirámide
    for (let j = 1; j <= i; j++) {
        fila += j + " ";
    }

    console.log(fila);
}