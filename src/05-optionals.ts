/*
- Los parametros opcionales deben ir al final
*/

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock || 10, //si no se envia el opcional , asigno por defecto
    isNew: isNew ?? false//si no se envia el opcional , asigno por defecto
  }
}

/*
  Tener cuidado ya que el toma:
  0 === false
  '' === false
  false === false
   por eso ya no usamos || si no el nullish-coalescing ??
*/
const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1,);// sin enviar parametros opcionales
console.log(p2);
