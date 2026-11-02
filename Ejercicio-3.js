/*Imprimir los numeros primos entre 2 y 1.000*/

for (let num = 2; num <= 1000; num++){
    let primo = true;
    
    for (let i = 2; i < num; i++){
        if(num % i === 0)
            primo = false;
            break;
        
        }
    
    if (primo){
        console.log(num);
    }
}
