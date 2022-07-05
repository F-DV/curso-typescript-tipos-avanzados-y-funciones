/*
CODIGO CON EL PROBLE
  La sobre carga de funciones NO FUNCIONA con arrow funtions

  . enviaremos un array y devolveremos un string
  . enviaremos un string y devolceremos un array
*/

export function parseStr(input: string | string[]): string | string[]{
  if(Array.isArray(input)){
    return input.join(''); //devuelve string
  }else{
    return input.split(''); // devuelve array string[]
  }
}

const respuestaArray = parseStr('Felipe');
console.log('Array',respuestaArray);
// respuestaArray.map() //Error, Typescript no deja utilizar funciones para array porque no sabe que devolvera

const respuestaString = parseStr(['f','e','l','i','p','e']);
console.log('string =>',respuestaString)//Error, Typescript no deja utilizar funciones para string porque no sabe que devolvera
// respuestaString.toloweCase()
