// never es usado para funciones que sabemos que
// nunca van a terminar

// ts ya infiera que es tipo never
const withoutEnd = () => {
  while (true) {
    console.log('nunca termina');
  }
};
// tambien la tipa como never
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if ( typeof input === 'string') {
    return 'es string';
  } else if (Array.isArray(input)) {
    // es la unica manera de verificar si es array
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(12312321);
// al ejecutar este programa el console.log que sigue nunca
// aparece debido a que la funcion marca error y nunca termina
// por ende no la deberia mostrar
console.log(example('hola despues del fail'));
console.log(example('hola despues del fail'));
console.log(example('hola despues del fail'));
// pero si la muestra wtf


// la diferencia con el void es que no tiene retorno
// la funcion void si termina
