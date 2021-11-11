const num1 = prompt('introduce un número');
if(num1 % 11 === 0 && num1 % 5 === 0){
    console.log('Es divisible entre 11 y 5.');
} else {
    console.log('No es divisible entre 11 y 5.');
}