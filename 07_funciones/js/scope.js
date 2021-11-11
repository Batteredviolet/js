//ámbito global

var a = 1;
let b = 2;
const c = 3;

//ámbito de función y bloque

function test() {
    var a = 4;
    let b = 5;      //estas variables solo existen aquí dentro
    const c = 6;
    console.log('Ámbito de función: ', a, b, c);
}
test();

//ámbito de bloque

if(true){
    var a = 4;      //var está sobrescribiendo la primera a global declarada
    let b = 5;      //estas variables solo existen aquí dentro
    const c = 6;
    console.log('Ámbito de bloque: ', a, b, c);
}
console.log('Ámbito global: ', a, b, c);