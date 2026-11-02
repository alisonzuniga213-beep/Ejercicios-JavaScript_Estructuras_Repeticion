/*Imprimir el abecedario invertido en cascada descendente*/

// Guarda el abecedario al revés
let abecedario = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

// Recorre el abecedario
for (let i = 0; i < 26; i++) {

    // substring(i) extrae el texto desde la posición i hasta el final
    console.log(abecedario.substring(i));
}