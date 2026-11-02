/*Sumar los enteros de 1 a 100 con do-while, while y for*/

let i = 1;
let suma = 0;

while(i <= 100) {
    suma += i++;
}

console.log (suma)


let A = 1;
let Mas = 0;

do {
    Mas += A++;
}while (A <= 100);{
    console.log (suma)
}


let More = 0 ;

for (let B = 1; B <= 100; B++){
    More += B;
}console.log (suma)
