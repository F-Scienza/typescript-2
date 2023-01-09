import { Product } from "./product.model"
// utility types
// con omit podemos empezar a omitir campos
export interface CreaetedProductDto extends Omit<Product, 'id'|'createdAt'|'upadtedAt'|'category'>{
  //extendemos para agregar categoryId
  categoryId:string
}
// el pick hace lo contrario, creamos un typo que SOLO INCLUYE
// las caracteristicas que querramos
type example = Pick <Product, 'color'| 'description'>


// omit omite y pick elije
