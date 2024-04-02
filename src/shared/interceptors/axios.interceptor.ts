import axios from "axios";
import { ACCESS_TOKEN } from "../consts/ACCESS_TOKEN";
import { IToken } from "../interfaces/IToken";

const URL: string = import.meta.env.VITE_BACKEND;
const modifiedAxios = axios.create({ baseURL: URL, timeout: 20000 });

modifiedAxios.interceptors.request.use((request: any) => {
  if (sessionStorage.getItem(ACCESS_TOKEN)) {
    const data = sessionStorage.getItem(ACCESS_TOKEN);

    if (data !== null) {
      const dataParse: IToken = JSON.parse(data);
      const access = dataParse.state.token;
      request.headers.Authorization = `Bearer ${access}`;
    }
  }
  return request;
});

export default modifiedAxios;
