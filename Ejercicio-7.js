/*Vizualizar una piramide numerica ascendente y descendente*/

// n = cuántas filas tiene la pirámide.
let n = 5;

// i = el número de fila en la que estoy 
for (let i = 1; i <= n; i++) {

  let fila = "";

  // e = contador de espacios. Cuenta cuántos espacios (los huecos de la Izquierda)
  for (let e = 1; e <= n - i; e++) {
    fila = fila + " ";
  }

  // j = el número que va subiendo en las filas.
  for (let j = 1; j <= i; j++) {
    fila = fila + j;     // escribo el valor de j
  }

  // k = el número que va bajando en las filas.
  for (let k = i - 1; k >= 1; k--) {
    fila = fila + k; 
  }

  // Muestra la fila
  console.log(fila);
}