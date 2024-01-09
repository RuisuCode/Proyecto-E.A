import { create } from "zustand";
// import { ACCESS_TOKEN } from "../consts/ACCESS_TOKEN";
// import { IDecodifiedToken, IToken } from "../interfaces/IToken";
import { persist, createJSONStorage } from "zustand/middleware";
/* interface IUserInfo {
  entity: number;
  setEntity: (value: IDecodifiedToken) => void;
} */

// const data = sessionStorage.getItem(ACCESS_TOKEN);
/* const validateToken = () => {
  if (data !== null) {
    const dataParse: IToken = JSON.parse(data);
    const token: any = dataParse.data.token;
    return token;
  }
}; */
// const testToken = validateToken();

/* export const useUserInfoStore = create<IUserInfo>((set) => ({
  entity: data !== null ? testToken.typeEntity : 999,
  setEntity: (token: IDecodifiedToken) => {
    set(() => ({ entity: token.typeEntity }));
  },
})); */
type State = {
  token?: string;
};

type Action = {
  setToken: (token: string) => void;
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
