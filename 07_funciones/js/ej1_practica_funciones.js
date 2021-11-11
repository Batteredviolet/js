/* 1- Crea un objeto calculadora
con los métodos sumar, restar, multiplicar
y dividir. 
Estos métodos esperan dos números
y devuelven el resultado de la operación. 
Luego usa el objeto para realizar algunos
cálculos y enseñarlos por la consola.
MINIBONUS: que no se pueda dividir entre cero
BONUS: el método sumar puede admitir
una lista infinita de números */

const calculadora = {
  suma: function (...elems) {
    // let total = 0;
    // for (const elem of elems){ //bonus
    //     total += elem;
    // }
    // return total;

    //OR//////////////////

    let suma = 0;
    for (let i = 0; i < elems.length; i++) {
      suma += elems[i];
    }
    return suma;
  },
  resta: function (resta1, resta2) {
    return resta1 - resta2;
  },
  multiplica: function (mult1, mult2) {
    return mult1 * mult2;
  },
  división: function (div1, div2) {
    if (div2 !== 0) {
      //minibonus
      return div1 / div2;
    } else {
      return "No se puede compañero";
    }
  },
};
console.log(calculadora.suma(2, 5, 8, 9, 6, 8));
console.log(calculadora.resta(5, 3));
console.log(calculadora.multiplica(3, 2));
console.log(calculadora.división(6, 0));

/* 2- Crea una función que le pasemos una
cadena de carácteres (string) y nos 
devuelva el número de vocales que tiene 
(suponemos que la cadena no tiene acentos) */

function numVocales(palabra) {
  return palabra.match(/[aeiou]/gi).length;
}

console.log(numVocales("Albaricoque"));

function contarVocales(texto) {
  const vocales = "aeiouAEIOU";
  let numVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto.charAt(i);
    for (let j = 0; j < vocales.length; j++) {
      const vocal = vocales.charAt(j);
      if (vocal === caracter) {
        numVocales++;
      }
    }
  }
  return numVocales;
}
console.log(contarVocales("albaricoque"));

/* 3- Crea una función a la que al pasarle
una cadena de texto nos la devuelve invertida */

function stringInvertida(texto) {
  // return texto.split('').reverse().join("");
  const invertida = texto.split("").reverse().join("");
  return invertida;
}
console.log(stringInvertida("Adios"));

console.log(stringInvertida("Hola"));

/* 4- Crea una función que verifique si un texto es un palindromo
ej:
    -esPalindromo('caracol') -> false
    -esPalindromo('la ruta natural') -> true
Nota: - No se tienen en cuenta los espacios

(No hace falta usar Foreach, map, filter, reduce)*/

//SIN EL BUCLE FOR
function isPalindromo(palabra = '') {
  
  let palabraFiltered = palabra.replaceAll(" ", "").toLowerCase();
  // const palabraInvertida = palabra.split("").reverse().join("");
  // const palabraInvertidaSinEspacios = palabraInvertida.replaceAll(" ", "");
  // return palabraInvertidaSinEspacios === palabra ? "es palindromo" : "no es palindromo";
  let toArray = palabraFiltered.split("").reverse().join("");
  console.log(toArray);
  // if(toArray === palabraFiltered){
  //   return 'Es palíndromo'
  // } else{
  //   return 'No es palíndromo'
  // }
  return palabraFiltered === toArray ? 'Es palíndromo' : 'No es palíndromo'
}
console.log(isPalindromo("La ruta natural"));


//CON EL BUCLE FOR
function isPalindromo2(str){
  //primero filtramos
  let palabraFiltered = str.replaceAll(" ", "").toLowerCase();
  for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - 1 -i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindromo2('larutanatural'));

/*5- Crea un programa en javascript que emule la máquina de la O.R.A.
Se pide al usuario que inserte una cantidad en un promt.
( se supone que en un és número)
Si la cantidad es inferior a 30 céntimos avisar que no es suficiente y
volver a pedir que ingrese la cantidad.
Si la cantidad es superior a 210 céntimos decir que se ha pasado
y volver a pedir la cantidad.
Si la cantidad es correcta devolver el tiempo que podrá estar estacionado.
Teniendo en cuenta que 1 céntimo equivqle a 1 minuto.*/

let importe = +prompt('Introduce un importe');
while(importe < 30 || importe > 210){
  let msg = importe < 30 ? 'El mínimo son 30, ingresa otra cantidad' : 'El máximo son 210, ingresa otra cantidad';
  importe = +prompt(msg);
}
alert('Puedes estar aparcado ' + importe + ' ' + 'minutos');