/*Generar las letras del abecedario en cascada ascendente*/

// Guarda el abecedario en orden normal
let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Recorre el abecedario
for (let i = 0; i < 26; i++) {

    // substring(i) obtiene el texto desde la posición indicada hasta el final
    console.log(abecedario.substring(0, i + 1));
}