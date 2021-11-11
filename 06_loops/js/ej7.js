let num = 50;
let divisores = [];
for(let i = num; i > 0; i--){
    if(num % i===0){
        divisores.push(i);
    }
    
}
console.log(divisores);