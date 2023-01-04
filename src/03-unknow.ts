// lo usamos para evitar trabajar con ANY

let anyVar: any;
anyVar = 'asd';
anyVar = 123;
anyVar = [];
// en ningun caso marca error

let isNew: boolean = anyVar;
//  en este caso no marca error porque fue asignado como objeto

anyVar.doSomething(); // tampoco marca error

let unknowVar: unknown;
// funciona como un any
unknowVar = 'asd';
unknowVar = 123;
unknowVar = [];
// peeeeeeero
// aca marca error porque hay que hacer una verificacion de tipo
// unknowVar.doSomething()
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

// a la funcion como no sabemos qué vamos a recibir
// le sugerimos que lo trate como unknow para luego
// hacer la verificacion de tipo
const parse = (str: string):unknown => {
  return JSON.parse(str);
};
