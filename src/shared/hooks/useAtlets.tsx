import {
  useMutation /* useQuery, useQueryClient */,
  useQuery,
} from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

// const QUERY_KEY = 'atletas';

export function useAggAtlets() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, "/atleta"),
    onSuccess: () => {
      toast.success("Éxito al agregar atleta");
      navigate("/atletas_nivel");
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
export function useEditAtlets() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.postFile(data, `/atleta/${id}`),
    onSuccess: () => {
      toast.success("Éxito al editar del atleta");
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
export function useTestCooperAtlets() {
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: any) => apiService.put(data, `/atleta/${id}/T`),
    onSuccess: () => {
      toast.success("Éxito al registar el test de cooper del atleta");
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
export function useGetAtletas() {
  const QUERY_KEY = "Atletas";
  const Atletas = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get("/atletas");
      return data.data;
    },
  });
  return Atletas;
}
export function useGetAtletasAdmin() {
  const QUERY_KEY = "Atletas";
  const Atletas = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get("/atletas/a");
      return data.data;
    },
  });
  return Atletas;
}
export function useGetAtletaIdM() {
  const QUERY_KEY = "Atleta Marcas";
  const { id } = useParams();
  const Atleta = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get(`/marcasAll/${id}/M`);
      return data;
    },
  });
  return Atleta;
}
export function useGetAtletaId() {
  const { id } = useParams();
  const QUERY_KEY = ["Atletas", id];
  const atletaId = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const data = await apiService.get(`/atleta/${id}`);
      return data.data;
    },
  });
  return atletaId;
}
