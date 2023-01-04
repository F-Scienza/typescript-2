// son como literal types creamos una especie de autodocumentacion

// es aconsejable que los enums esten en mayusculas
enum ROLES {
  // set de conjunto de opciones
  ADMIN = "admin", // Numero o string esta bien
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  userName: string;
  role: ROLES
}

const nicoUser: User = {
  userName: "nico",
  role: ROLES.ADMIN // Asi asignamos un enum
}

// los enum evita que nos equivoquemos dandonos con claridad
// las opciones que tenemos sin posibilidad de equivocarnos

// nos dan un set de opciones predefinidas para que los miembros del equipo
// sepan qué pueden usar
