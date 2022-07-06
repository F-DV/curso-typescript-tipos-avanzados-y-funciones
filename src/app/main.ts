import { addProduct, findProducts, products, updateProduct } from "./products/product.servic";
import {faker} from '@faker-js/faker';

// Creamos 50 datos Randomicos para operarlos pormedio
// de un CRUD
for (let index = 0; index < 50; index++) {
  addProduct({
    //id: faker.datatype.uuid(),    //Genera un id de forma randomica
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.cmyk(),
    size: faker.helpers.arrayElement(['S','M','L','XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    //createdAt: faker.date.recent(),
    //updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid()
  });
}
console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80
});


findProducts({
  stock: 10,
})
