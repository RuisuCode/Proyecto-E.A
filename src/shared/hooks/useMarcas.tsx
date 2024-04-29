import { useMutation, useQuery } from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export function useMarcas() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, `/marcas/${id}`),
    onSuccess: () => {
      toast.success("Éxito al agregar marca");
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
export function useGetMarcas2() {
  const QUERY_KEY = "Marcas2";
  const { id } = useParams();
  const Marcas = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get(`/marcas2/${id}`);
      return data.data;
    },
  });
  return Marcas;
}
export function useGetMarcasAll() {
  const QUERY_KEY = "MarcasAll";
  const { id } = useParams();
  const Marcas = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get(`/marcasAll/${id}`);
      return data.data;
    },
  });
  return Marcas;
}
export function useDeleteMarcasAll() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.delete(data, `/marcasAll/${id}/D`),
    onSuccess: () => {
      toast.success("Éxito al eliminar la marca");
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
export function useUpdateMarcasAll() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.put(data, `/marcasAll/${id}/U`),
    onSuccess: () => {
      toast.success("Éxito al editar la marca");
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

export function useGraficaPost() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, `/grafica/${id}`),
    onError: () => {
      toast.error("Error al obtener los datos");
    },
  });
}
