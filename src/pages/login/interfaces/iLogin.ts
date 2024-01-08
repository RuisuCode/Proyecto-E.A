export interface ILogin {
  cedula: string;
  password: string;
}

export interface IRecovery {
  cedula: string;
  password: string;
  confirmPassword: string;
}
