import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

// Local
import { ACCESS_TOKEN } from "../../../shared/consts/ACCESS_TOKEN";
import { ILogin } from "../interfaces/iLogin";
import { apiService } from "../../../shared/consts/API_SERVICES";
import { useUserInfoStore } from "../../../shared/store/UserStore";

export function useLogin() {
  const navigate = useNavigate();
  const { setEntity } = useUserInfoStore();

  return useMutation((data: ILogin) => apiService.post(data, "/login"), {
    onSuccess: (data) => {
      sessionStorage.setItem(ACCESS_TOKEN, JSON.stringify(data));
      const token: any = jwtDecode(data.data.token);
      setEntity(token);
      navigate("/inicio");
    },
    onError: (err) => {
      const error = err as AxiosError;
      const statusRequest = error.request?.status;
      const statusResponse = error.response?.status;

      if (statusRequest === 0) {
        toast.error("Verifique su conexión a internet y vuelva a intentarlo.");
        return;
      }

      if (statusResponse === 400) {
        toast.error("Usuario o contraseña incorrectos.");
        return;
      }

      toast.error("Ha surgido un error al momento de iniciar sesión.");
    },
  });
}

export function useLogout() {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();

  //Cuando exista el borrar token en el back eliminar esto y descomentar lo de abajo
  const logOut = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    navigate("/", { replace: true });
  };

  return logOut;

  // return useMutation(() => apiService.get('/api/logout'), {
  //   onSuccess: () => {
  //     sessionStorage.removeItem(ACCESS_TOKEN);
  //     navigate('/', { replace: true });
  //     queryClient.clear();
  //   },
  // });
}
