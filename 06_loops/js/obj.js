//enseñar todos los de la lista
// const users = [
//     {id:1, name:'Pepe'},
//     {id:2, name:'Jorge'},
//     {id:3, name:'Sandra'},
//     {id:4, name:'Eulogio'},
//     {id:5, name:'Gori'},
//     {id:6, name:'Neus'},
// ]
// for(let i = 0; i < users.length; i++){
//     console.log(users[i].name);
// }

//break

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Estamos en el 5");
//     break;
//   }
//   console.log("numero: " + i);
// }

//continue

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log("Estamos en el 5");
//     continue;
//   }
//   console.log("numero: " + i);
// }

//EXAMPLE CONTINUE

// const carrito = [
//     {name: 'producto 1',precio: 22},
//     {name: 'producto 2',precio: 23, descuento: true},
//     {name: 'producto 3',precio: 24},
//     {name: 'producto 4',precio: 25, descuento: true},
//     {name: 'producto 5',precio: 26}
// ]

// for(let i = 0; i < carrito.length; i++){
//     if(carrito[i].descuento){
//         console.log('El producto ' + carrito[i].name + ' tiene descuento');
//         continue;
//     }
//     console.log(carrito[i].name);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("MarcoPolo");
  }
  else if (i % 3 === 0) {
    console.log("Marco");
  }
  else if (i % 5 === 0) {
    console.log("Polo");
  } else{
    console.log(i);
  }
  
}
