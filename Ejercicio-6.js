/*Visualizar un triangulo creciente de asteriscos*/

for (let fila = 1; fila <= 5; fila++) {

    let asterisco = "";

    // Agrega los asteriscos en cada fila
    for (let x = 1; x <= fila; x++) {
        asterisco += "* ";
    }

    // Muestra la fila
    console.log(asterisco);

}