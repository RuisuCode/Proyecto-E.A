import { create } from "zustand";
import { ACCESS_TOKEN } from "../shared/consts/ACCESS_TOKEN";
import { IToken } from "../shared/interfaces/IToken";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  token?: string;
  rolId?: number;
};

type Action = {
  setToken: (token: string) => void;
  setRolId: (rolId: number) => void;
  logout: () => void;
};

export const UseAuthStore = create(
  persist<State & Action>(
    (set) => ({
      setToken: (token: string) => {
        set(() => ({
          token,
        }));
      },
      setRolId: (rolId: number) => {
        set(() => ({
          rolId,
        }));
      },
      logout: () => {
        sessionStorage.removeItem("auth");
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

interface IUserInfo {
  entity: number;
  setEntity: (value: IToken) => void;
}
const data = sessionStorage.getItem(ACCESS_TOKEN);

const validateToken = () => {
  if (data !== null) {
    const dataParse = JSON.parse(data);

    const tokenId = dataParse;

    return tokenId;
  }
};

const testToken = validateToken();

console.log(testToken);

export const useUserInfoStore = create<IUserInfo>((set) => ({
  entity: data !== null ? testToken.state.rolId : 0,
  setEntity: (tokenId: IToken) => {
    set(() => ({ entity: tokenId.state.rolId }));
  },
}));
