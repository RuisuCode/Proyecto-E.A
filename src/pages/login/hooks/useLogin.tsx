import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import jwtDecode from "jwt-decode";

// Local
import { ACCESS_TOKEN } from "../../../shared/consts/ACCESS_TOKEN";
import { ILogin } from "../interfaces/iLogin";
import { apiService } from "../../../shared/consts/API_SERVICES";
import { UseAuthStore } from "../../../shared/store/UserStore";

export function useLogin() {
  const navigate = useNavigate();
  const { setToken } = UseAuthStore();

  return useMutation({
    mutationFn: (data: ILogin) => apiService.post(data, "/login"),
    onSuccess: (data: any) => {
      sessionStorage.setItem(ACCESS_TOKEN, JSON.stringify(data));
      const token: any = data.data.token;
      setToken(token);
      navigate("/inicio");
      toast.success("Éxito al iniciar session");
    },
    onError: (err: any) => {
      const error = err as AxiosError;
      const statusRequest = error.request?.status;
      const statusResponse = error.response?.status;

      if (statusRequest === 0) {
        toast.error("Verifique su conexión a internet y vuelva a intentarlo.", {
          position: "top-left",
        });
        return;
      }

      if (statusResponse === 400) {
        toast.error("Usuario o contraseña incorrectos.", {
          position: "top-left",
        });
        return;
      }
      if (statusResponse === 404) {
        toast.error("Usuario o contraseña incorrectos.", {
          position: "top-left",
        });
        return;
      }

      toast.error("Ha surgido un error al momento de iniciar sesión.", {
        position: "top-left",
      });
    },
  });
}

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiService.post(ACCESS_TOKEN, "/logout"),
    onSuccess: () => {
      sessionStorage.removeItem(ACCESS_TOKEN);
      navigate("/", { replace: true });
      queryClient.clear();
      toast.success("Éxito al cerrar session");
    },
  });
}
//Cuando exista el borrar token en el back eliminar esto y descomentar lo de abajo
/* const logOut = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    navigate("/", { replace: true });
  };

  return logOut; */
