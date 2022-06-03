export interface IUser {
  id: number;
  email: string;
  token: string;
  firstName: string;
  lastName: string;

}

export interface ICurrentUserResponse {
  token: string;
  user: IUser
}

export interface IUserAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IUserAddressResponse {
  address: IUserAddress;
}

export interface IEmailExistsResponse {
  exists: boolean;
}
