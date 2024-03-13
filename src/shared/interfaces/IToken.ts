export interface IToken {
  state: {
    token: string;
    rolId?: number;
  };
  error: boolean;
  message: string;
}
// del de arriba que no esta decodificado
export interface IDecodifiedToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  typeEntity: number;
  user_id: string;
}

export interface IRolId {
  rolId?: number;
}
