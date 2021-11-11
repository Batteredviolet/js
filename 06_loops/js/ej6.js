let n1 = +prompt('Ingresa un número');
let m = +prompt('Ingresa otro número');
let suma = 0;
while(n1 <= m){
    if(n1 % 2 === 0){
        suma += n1;
    }
    n1++;
}
console.log(suma);

