// le asignamos por defecto un valor
// cuando en los parametros no vengan especificados se asignaran esos

export const createProduct = (
  id: string | number,
  isNew: boolean = true, // ya no requiere el ? de opcional
  stock: number = 10 // ya no requiere el ? de opcional
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, true, 12)
console.log(p1)
const p2 = createProduct(1, true)
console.log(p2)
const p3 = createProduct(1)
console.log(p3)
