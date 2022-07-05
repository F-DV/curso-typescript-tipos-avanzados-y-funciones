import { BaseModel } from "../base.model";

export enum ROLES {              //Se crea Enum
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface User extends BaseModel{
  username: string;
  role: ROLES;
}

