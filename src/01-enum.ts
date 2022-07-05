enum ROLES {              //Se crea Enum
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;          //Creamos fel tipo enum
}

const felipeUser: User = {
  username: 'Felipe',
  role: ROLES.ADMIN     //podemos acceder a un conjunto de opciones de enum
}
