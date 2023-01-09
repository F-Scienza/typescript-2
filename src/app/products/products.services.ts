import { faker } from '@faker-js/faker'
import { CreaetedProductDto } from './product.dto'
import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: CreaetedProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      updatedAt: faker.date.recent(),
      createdAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}
////// creo que lo que sigue está bien
export const getProduct = (idProd: string) => {
  const searchedProd = products.find(p => p.id == idProd)
  return searchedProd
}

export const updateProduct = (id: string, changes: Product): Product => {
  return
}

export const deleteProduct = (idProd: string) => {
  const filterProd = products.filter(p => p.id == idProd)
  return filterProd
}
