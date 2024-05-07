import { useNavigate, useParams } from "react-router-dom";
import { apiService } from "../consts/API_SERVICES";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useAggCoach() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, "/entrenador"),
    onSuccess: () => {
      toast.success("Éxito al registrar el entrenador");
      navigate("/entrenadores");
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
export function useEditCoach() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, `/entrenador/${id}`),
    onSuccess: () => {
      toast.success("Éxito al editar el entrenador");
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

export function useGetCoachs() {
  return useQuery({
    queryKey: ["Coachs"],
    queryFn: () => apiService.get("/entrenador"),
  });
}
export function useGetCoachID() {
  const { id } = useParams();
  return useQuery({
    queryKey: ["Coach"],
    queryFn: () => apiService.get(`/entrenador/${id}`),
  });
}
export function useEntrenadorEstatus() {
  return useMutation({
    mutationKey: ["Coach"],
    mutationFn: async (data: any) =>
      await apiService.post(data, `/entreEstatus`),
  });
}
