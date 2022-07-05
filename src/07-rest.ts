import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: 'felipe',
  role: ROLES.ADMIN
}
/*
  Este codigo se utiliza para verificar Roles en autenticación
*/

// Primera forma de verificar sin Rest
export const checkAdminRole = (roles: string[]) =>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

console.log('checkAdminRole: ',checkAdminRole([ROLES.ADMIN,ROLES.CUSTOMER]));

// Con rest, no tendremos que enviar forzosamente un array
// poniento el spread operator en los parametros ... los convierte en
// un array

export const checkAdminRoleV2 = (...roles: string[]) =>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

console.log('checkAdminRoleV2: ',checkAdminRoleV2(ROLES.ADMIN,ROLES.CUSTOMER));
