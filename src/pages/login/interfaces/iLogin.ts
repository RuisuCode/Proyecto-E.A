export interface ILogin {
  ci: string;
  password: string;
}

export interface IRecovery {
  ci: string;
  password: string;
  confirmPassword: string;
}
