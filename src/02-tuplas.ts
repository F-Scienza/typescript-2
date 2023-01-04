//primero vamos a recordar como es el tipado de un array
const prices: (number | string)[] = [1, 2, 3, 4, 5, 'asd'];
prices.push(1);
prices.push('1asdas');
// lo que conseguimos es que podamos insertar numero o string
// en cualquier posicion del array

// tuple
let user: [string, number, boolean]
// establecemos que en la primera posicion tenemos un string
// en la segunda un number si o si y en la 3ra boolean
// user = []
// user = ['cufa']
// user = ['cufa', 123123];
user = ['cufa', 12, true]


const [username, age] = user // asi destructuramos una tupla
console.log( username, age)

// donde utilizamos una tupla?
// en usestate de react
