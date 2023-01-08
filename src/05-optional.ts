export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
  // ts siempre nos sugiere dejar los parametros opcionales al ultimo
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
    // le asignamos por defecto un valor en caso de que no venga
    // porque si no se le asigna undefined y no nos gusta
  }
}

//resultado sin asignar valores por defecto
const p1 = createProduct(1, true, 12)
console.log(p1)
// { id: 1, stock: 12, isNew: true }
const p2 = createProduct(1, true)
console.log(p2)
//{ id: 1, stock: undefined, isNew: true }

const p3 = createProduct(1)
console.log(p3)
// { id: 1, stock: 10, isNew: true }
// le asigno 10 y true
