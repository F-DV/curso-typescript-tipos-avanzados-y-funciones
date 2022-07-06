/*
  El Array comun me permite realizar todas las modificaciones
propias de un array
*/
const numbers:number[] = [1,2,3,4,5,6]; //Array normal
numbers.push(9);
numbers.pop();
numbers.unshift(1);
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);

const numberss:ReadonlyArray<number> = [1,2,3,4,5,6]; //Array Readonly
//numberss.push(9); //no permite porque modifica el array original
//numberss.pop(); //no permite porque modifica el array original
//numberss.unshift(1);//no permite porque modifica el array original
numberss.filter(() => {});
numberss.reduce(() => 0);
numberss.map(() => 0);
