export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  avatar: string;
  date: Date;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}