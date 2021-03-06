//Ejemplo 1 : ciclo infinito
const withoutEnd = () =>{
  while(true){
    console.log('Nunca pares de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string'){
    return 'es un string';
  }else if(Array.isArray(input)){
    return 'es un array';
  }
  return fail("no es nada");
}

console.log(example('string'));
console.log(example([1,2,1,2]));
console.log(example(1231));       // Se detiene el programa
console.log('Hola depues del fail');
