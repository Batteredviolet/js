const bisiesto = prompt('Introduce un año');
if(bisiesto % 4 === 0 && bisiesto % 100 !== 0 || bisiesto % 400 === 0){
    console.log('Es bisiesto');
} else{
    console.log('No es bisiesto');
}