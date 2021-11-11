//como saber si es una palabra o si son números

const incog = prompt('introduce lo que quieras');
console.log(isNaN(incog) ? 'Texto' : 'Número');

//como saber si la primera es letra o número

const texto = prompt('Escribe un texto');
const firstChar = texto.charAt(0);
const esLetra = isNaN(Number(firstChar));

console.log(esLetra ? 'El primer carácter es una letra' : 'El primer carácter es un número');