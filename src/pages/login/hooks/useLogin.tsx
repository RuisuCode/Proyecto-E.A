import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Local
import { ILogin } from "../interfaces/iLogin";
import { apiService } from "../../../shared/consts/API_SERVICES";
import { UseAuthStore } from "../../../store/UserStore";

export function useLogin() {
  const navigate = useNavigate();
  const { setToken } = UseAuthStore();
  const { setRolId } = UseAuthStore();

  return useMutation({
    mutationFn: (data: ILogin) => apiService.post(data, "/login"),
    onSuccess: (data: any) => {
      setToken(data.data.token);
      setRolId(data.data.rolId);
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
        toast.error(err.response.data.message, {
          position: "top-left",
        });
        return;
      }
      if (statusResponse === 404) {
        toast.error("A ocurrido un error al intentar iniciar sesión", {
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
  const token = UseAuthStore((state: any) => state.token);
  const data: any = [{ token }];

  return useMutation({
    mutationFn: () => apiService.post(data, "/logout"),
    onSuccess: () => {
      sessionStorage.removeItem("auth");
      navigate("/", { replace: true });
      queryClient.clear();
      toast.success("Éxito al cerrar sesión");
    },
    onError: () => {
      toast.error("Error al intentar cerrar sesión");
    },
  });
}
