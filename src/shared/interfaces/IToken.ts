export interface IToken {
  data: {
    token: string;
  };
  error: boolean;
  message: string;
}

export interface IDecodifiedToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  typeEntity: number;
  user_id: string;
}
