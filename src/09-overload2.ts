// vamos a hacer una sobrecarga
// el problema es que ts no puede inferir qué vamos a retornar

// hacemos sobrecarga el tipado de input y output
// le decimos que cuando recibe string devuelve array de string
export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean

// ahora es mas generico y podemos inferirle los tipos
// de datos que recibe y devuelve
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('')// string
  } else if (typeof input === 'string'){
    return input.split('')// string[]
  } else if (typeof input === 'number'){
    return true
  }
}

const rtaBoolean = parseStr(123)
console.log('rta boolean ',rtaBoolean)
