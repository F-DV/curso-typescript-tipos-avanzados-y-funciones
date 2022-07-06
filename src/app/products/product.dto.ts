import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'>{
 categoryId: string;
};

type example = Pick<Product, 'color' | 'description'>

export interface updateProductDto extends Partial<CreateProductDto>{};

type example2 = Required<Product>; //contrario de Partial


export interface FindProductDto extends Readonly<Partial<Product>>{} //Solo Lectura y ademas partial
