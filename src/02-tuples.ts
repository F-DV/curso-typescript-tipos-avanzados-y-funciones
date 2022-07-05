const prices: ( number | string)[] = [1,2,3,4,5,6];
prices.push(1);
prices.push('1');

/*
   Defino que la primera posicion debe ser un String y la
   segunda posicion un number, en caso contrario da error
*/
let userr: [string,number];
userr = ['Felipe', 28];
//userr = ['felipe']; //error
//userr = ['Fel',12,12]; //error

/*
DESTRUCTURACION DE UNA TUPLA
le asigan una variable a cada posición de la tupla
*/
const [username, age] = userr;

console.log(username);
console.log(age);
