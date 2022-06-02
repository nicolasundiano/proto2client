export interface IUser {
  email: string;
  displayName: string;
  token: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface ICurrentUserResponse {
  token: string;
  user: IUser
}

export interface IEmailExistsResponse {
  exists: boolean;
}
