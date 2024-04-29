import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiService } from "../consts/API_SERVICES";

export function useAggEvents() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, "/evento"),
    onSuccess: () => {
      toast.success("Éxito al agregar evento");
      navigate("/eventos");
    },
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
export function useEditEvent() {
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, "/evento/p"),
    onSuccess: () => {
      toast.success("Éxito al editar evento");
    },
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

export function useGetEvents() {
  return useQuery({
    queryKey: ["Eventos"],
    queryFn: () => apiService.get("/eventos"),
  });
}

export function useDeleteEvent() {
  return useMutation({
    mutationFn: (data: any) => apiService.delete(data, `/evento/d`),
    onSuccess: () => {
      toast.success("Éxito al eliminar el evento");
    },
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
