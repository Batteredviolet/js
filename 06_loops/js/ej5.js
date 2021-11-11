let i = prompt("Introduce un número");
let x = 0;
let y = 0;
// let x = '13';
// console.log(i.length);
while (x < i.length) {
  //   console.log(i.charAt(x));
  const cifra = Number(i.charAt(x));
  y += +i.charAt(x);
  x++;
}
if (isNaN(y)) {
  console.log("Escribe un número entero positivo");
} else {
  console.log(`La suma total es ${y}`);
}
