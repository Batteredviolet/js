// Código más ordenado
// Se pueden reutilizar

//DOS FORMAS DE DECLARAR FUNCIONES

//1 -Declaración de una función:
function suma() {
  console.log(2 + 3);
}

//Ahora mismo existe, pero hay que llamarla para ejecutarla
suma();

//2- Función como expresiones
const suma2 = function () {
  console.log(4 + 4);
};

suma2();

//Funciones con parámetros

function sumaMejorada(a, b) {
  console.log(a + b);
}
sumaMejorada(7, 4);
sumaMejorada(13, 8);

function saludar(nombre, apellido) {
  console.log("¡Bienvenido " + nombre + " " + apellido + " a nuestro hotel!");
}
//Son argumentos Ismael Garcia
saludar("Ismael", "Garcia");

////////////////////////////////

//Como recoger el dato que nos da una funcion
function sumar (a, b){
  return a + b;
}

const resultado = sumar(3, 6); //opción de variable
console.log(resultado);
console.log(sumar(1, 4)); //Usar directamente donde queramos

// IIFE - Funciones que se declaran y se llaman a la vez

(function(){
  console.log('Soy una función IIFE autoejectuada');
})() //se mete entre paréntesis y se meten al final

//ejemplo un poco + útil
let total = 0;

function addTolist(precio){
  return total += precio;
}

function calcularPrecioFinal(total){
  return 1.5 * total
}

addTolist(200);
addTolist(32);
console.log(`El total es: ${total}`);

const precioFinal = calcularPrecioFinal(total);
console.log('El precio final es: '+ precioFinal);
