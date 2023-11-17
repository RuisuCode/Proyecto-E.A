import { create } from "zustand";
import { ACCESS_TOKEN } from "../consts/ACCESS_TOKEN";
import { IDecodifiedToken, IToken } from "../interfaces/IToken";
import jwtDecode from "jwt-decode";
interface IUserInfo {
  entity: number;
  setEntity: (value: IDecodifiedToken) => void;
}

const data = sessionStorage.getItem(ACCESS_TOKEN);
const validateToken = () => {
  if (data !== null) {
    const dataParse: IToken = JSON.parse(data);
    const token: any = jwtDecode(dataParse.data.token);
    return token;
  }
};
const testToken = validateToken();

export const useUserInfoStore = create<IUserInfo>((set) => ({
  entity: data !== null ? testToken.typeEntity : 0,
  setEntity: (token: IDecodifiedToken) => {
    set(() => ({ entity: token.typeEntity }));
  },
}));
