type Sizes = 'S' | 'M' | 'L' | 'XL'; // con interface no podemos hacer esto
type userId = string | number; // con interface no podemos hacer esto
const products: Product[] = [];
/*
COMPARACION CON TYPES
*/
/*
type Product = {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}
*/

interface Product { //La interfaz permite extender
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}


products.push({
  id: 1,
  title: 'p1',
  createAt: new Date(),
  stock: 90,
  size: 'M'
});
