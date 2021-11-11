//EJERCICIO 1

let pokemons = [
  { name: "pikachu", type: "electric" },
  { name: "charmander", type: "fire" },
  { name: "bulbasaur", type: "grass" },
  { name: "squirtle", type: "water" },
  { name: "flareon", type: "fire" },
  { name: "jolteon", type: "electric" },
];

//CON FILTER
const fireOnes = pokemons.filter((pokemon) => pokemon.type === "fire");
console.log(fireOnes);

//CON FOR
function getFirePokes(lista) {
  const filtrados = [];
  for (let i = 0; i < lista.length; i++) {
    const currentItem = lista[i].type;
    if (currentItem === "fire") {
      filtrados.push(lista[i].name);
    }
  }
  return filtrados;
}

console.log(getFirePokes(pokemons));

//EJERCICIO 2

const companies = [
  { name: "Apple", ceo: "Tim Cook", year: 1976 },
  { name: "Microsoft", ceo: "Satya Nadella", year: 1975 },
  { name: "Amazon", ceo: "Jeft Bezos", year: 1994 },
  { name: "Google", ceo: "SUndar Pichai", year: 1998 },
  { name: "Netflix", ceo: "Reed Hastings", year: 1997 },
  { name: "Facebook", ceo: "Mark Zuckerberg", year: 2004 },
];
//OPCIÓN CORTA
const ordenado = companies.sort((a, b) => b.year - a.year);
console.log(ordenado);

//OPCIÓN LARGA
// const ordenado = companies.sort(function(a, b){
//     if(a.year < b.year){
//         return 1;
//     }else {
//         return -1;
//     }
// });
// console.log(ordenado);

//EJERCICIO 3

//CON FOR
const edades = [1, 2, 3, 14, 16, 65, 44, 88];

// function sumaEdades(arr) {
//   let suma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     suma += item;
//   }
//   return suma;
// }
// console.log(sumaEdades(edades));

//CON REDUCE
const sumEdades = edades.reduce((total, item) => total + item);
console.log(sumEdades);

//EJERCICIO 4

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

//CON FOREACH (que no devuelve nada, entonces hay que usar el boleano)
// function resultado(arr) {
//   let cumple = true;
//   arr.forEach((elemento) => {
//     if (elemento.precio < 1000) {
//       cumple = false;
//       return;
//     }
//   });
//   return cumple;
// }

// console.log(resultado(carrito));

//CON EVERY
const result = carrito.every( item => item.precio > 1000);
console.log(result);