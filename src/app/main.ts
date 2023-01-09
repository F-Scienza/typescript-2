import { faker } from '@faker-js/faker'
import { addProduct, products, updateProduct } from "./products/products.services";


for (let index = 0; index < 5; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(
    ),
    updateAt: faker.date.recent(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products)
const product = products[0]

updateProduct(product.id, {
  title: 'new title',
  stock: 90
})
