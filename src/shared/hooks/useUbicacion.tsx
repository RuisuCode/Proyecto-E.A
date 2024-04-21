import { useMutation } from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";

export function useUbicacion() {
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, `/ubicacion`),
    onError: (error: any) => {
      const statusResponse = error.response?.status;
      {
        error.response.data?.message.map((item: any) => {
          toast.error(item.message);
        });
      }
      if (statusResponse === 404) {
        toast.error(`A ocurrido un error inesperado ${statusResponse} `);
        return;
      }
    },
  });
}
export function useCiudades() {
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, `/ubicacion2`),
    onError: (error: any) => {
      const statusResponse = error.response?.status;
      {
        error.response.data?.message.map((item: any) => {
          toast.error(item.message);
        });
      }
      if (statusResponse === 404) {
        toast.error(`A ocurrido un error inesperado ${statusResponse} `);
        return;
      }
    },
  });
}
