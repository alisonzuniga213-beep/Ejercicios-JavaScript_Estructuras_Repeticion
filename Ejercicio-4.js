let num_lineas = 5;
let espacio = "";
let asterisco = "";

// Hace la parte de arriba del rombo
for (let fila = 1; fila <= num_lineas; fila++) {

    // Va colocando los espacios
    for (let e = num_lineas - fila; e > 0; e--) {
        espacio += "  ";
    }

    // Agrega los asteriscos en cada fila
    for (let x = 1; x < 2 * fila; x++) {
        asterisco += "* ";
    }

    // Muestra la fila
    console.log(espacio + asterisco);

    // Deja las variables vacías para empezar otra fila
    espacio = "";
    asterisco = "";
}

// Hace la parte de abajo del rombo
for (let fila = num_lineas - 1; fila >= 1; fila--) {

    // Coloca los espacios
    for (let e = num_lineas - fila; e > 0; e--) {
        espacio += "  ";
    }

    // Va quitando asteriscos en cada fila
    for (let x = 1; x < 2 * fila; x++) {
        asterisco += "* ";
    }

    // Muestra la fila
    console.log(espacio + asterisco);

    // Vuelve a dejar las variables vacías
    espacio = "";
    asterisco = "";
}