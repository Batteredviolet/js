const random = Math.ceil(Math.random() * 10);
const numUsuario = Number(prompt("Introduce un número a ver si tienes suerte"));
if (numUsuario === random) {
  alert("¡Has acertado!");
  console.log(numUsuario);
  console.log(random);
} else {
  alert("Prueba otra vez ");
  console.log(random);
}
