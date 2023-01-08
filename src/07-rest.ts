// parametros rest || rest params
// flexibilidad en los parametros
// podemos mandar la cantidad de argumentos que querramos
// en js
// const fc = (...args) => {} // recibimos cualquier cantidad

import { User, ROLES } from "./01-enum";

const currentUser: User = {
  userName: 'f-scienza',
  role: ROLES.CUSTOMER
}
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false
}
const rta = checkAdminRole()

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true
  }
  if (currentUser.role === role2) {
    return true
  }
  return false
}
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER)

////////////////
// le decimos quenos envie el role como array  de strings
export const checkRoleV2 = (roles: string[]) => {
  // chequea si coincide con alguno de los parametros
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}
// le pasamos los parametros como un array
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER])

// refactor con rest
// definitivo, mejor manera

//recibimos cualquier cantidad de roles tipo rest
export const checkroleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    // los compara y devuelve true
    return true
  }
  return false
}
const rta4 = checkroleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log('checkrolev3', rta4)

