const prueba = prompt('introduce aquí una palabra')
// como saber si la primera letra es mayúscula o minúscula
// if(prueba.charCodeAt(0) >= 65 && prueba.charCodeAt(0) <= 90){
//     console.log('Es mayúscula')
// } else {
//     console.log('Es minúscula');
// }
const letter = prueba.charAt(0);
if(letter === letter.toUpperCase()){
    console.log('Es mayúscula');
} else {
    console.log('Es minúscula');
}