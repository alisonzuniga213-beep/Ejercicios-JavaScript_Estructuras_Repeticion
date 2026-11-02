/*Calcular el factorial de un numero entero*/

// Número al que se calcula el factorial
let n = 5;

// Variable donde se guarda el resultado
let factorial = 1;

// Recorre los números desde 1 hasta n
for (let i = 1; i <= n; i++) {

    // Multiplica el resultado por cada número
    factorial = factorial * i;
}

// Muestra el resultado
console.log("El factorial de " + n + " es: " + factorial);