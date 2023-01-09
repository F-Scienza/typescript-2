import { BaseModel } from "../base.model";
import { Category } from "../category/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL'
export interface Product extends BaseModel{
  title: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  size?: Sizes;
  color?: string;
  category: Category;
  isNew: boolean;
  tags: string[];
}
