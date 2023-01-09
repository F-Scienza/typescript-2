// sobrecarga de funciones
// cufa => [c,u,f,a] = le envio un string y devuelvo un array de string
// [c,u,f,a] => cufa le envio un array de string y devuelvo un string

// la sobrecarga de funciones solo funciona en "function"
// en const no
function parseStr(input: string | string[]): string | string[] {
//acersion de tipos para resolver el algoritmo
  if(Array.isArray(input)){
    //como sabemos que es un array aplicamos .join que lo une
    return input.join('')// string
  }else{
    // sabemos que solo recibe array o string entonces si o si
    // en else vamos a tener un string
    return input.split('')// string[]
  }
}
const rtaArray = parseStr('cufa')
// rtaArray.reverse()
// con este programa no nos deja acceder a las funciones de un array
// porque el programa no sabe especificamente que va a ser un array
// sabe que es str o array pero no con certeza
// tendriamos que hacer una funcion que haga acersion de tipos
const rtaStr = parseStr(['c','u','f','a'])
// en string tambien va a marcar como error
console.log('rtaAray cufa =>', rtaArray)
console.log(`rtaStr ['c','u','f','a'] =>`,rtaStr)
