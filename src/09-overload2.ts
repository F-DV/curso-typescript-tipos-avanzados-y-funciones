/*
CODIGO CON LA SOLUCION AL PROBLEMA
  La sobre carga de funciones NO FUNCIONA con arrow funtions

  . enviaremos un array y devolveremos un string
  . enviaremos un string y devolceremos un array
*/

//Solucion a la sobre carga
function parseStr(input: string): string[];// cuando ingrese un string devuelve un array
function parseStr(input: string[]): string;// cuando ingrese un array devuelve un string

function parseStr(input: string | string[]): string | string[]{
  if(Array.isArray(input)){
    return input.join(''); //devuelve string
  }else{
    return input.split(''); // devuelve array string[]
  }
}

const respuestaArray = parseStr('Felipe');
console.log('Array',respuestaArray);
respuestaArray.map(elemnto => elemnto.replace('',' '));//podemos usar las funciones propias de un array

const respuestaString = parseStr(['f','e','l','i','p','e']);
console.log('string =>',respuestaString)//Error, Typescript no deja utilizar funciones para string porque no sabe que devolvera
respuestaString.toLowerCase(); //podemos usar las funciones propias de un string
