import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel { //La interfaz permite extender
  title: string;
  image: string,
  description: string,
  stock: number;
  size?: Sizes;
  color: string | number[];
  price: number
  category: Category; //otra interface que tiene una estructura
  isNew: boolean;
  tags: string[];
}


