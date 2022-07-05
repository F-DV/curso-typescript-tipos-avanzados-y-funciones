/*
- Los parametros al estar inicializados quedan por defecto
y podremos enviarlos o no cuando utilizemos la función
*/

export const createProduct = (
  id: string | number,
  isNew: boolean = true,  // Por defecto
  stock: number = 10,     //Por defecto
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1,);// sin enviar parametros opcionales
console.log(p2);
