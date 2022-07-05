let anyVar: any; //Any es desactivar typescript practicamente
anyVar = true; //Permite
anyVar = undefined;//Permite
anyVar = null;//Permite
anyVar = [];//Permite
anyVar = {};//Permite

anyVar.doSomething();//Permite, apesar de que no existe tal funcion

/*
  el unKnow funciona como un any pero nos pide almenos
  verificar si las funciones que vamos a usar existan
  y que su tipo sea verificado
*/
let unKnowVar: unknown;
unKnowVar = true; //permite igual que any
unKnowVar = undefined;//permite igual que any
unKnowVar = null;//permite igual que any
unKnowVar = [];//permite igual que any
unKnowVar = {};//permite igual que any

// unKnowVar.doSomething(); //No permite porque no existe tal funcion y no sabemos el tipo

if(typeof unKnowVar === 'string'){
  unKnowVar.toLowerCase();//Deja utilizar la funcion ya que hay una validacion previa
}

//Ejemplo en la concerción a JSON
const parse = (str:string): unknown =>{
  return JSON.parse(str);
}
