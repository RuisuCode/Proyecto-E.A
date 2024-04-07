import {
  useMutation /* useQuery, useQueryClient */,
  useQuery,
} from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

// const QUERY_KEY = 'atletas';

export function useAggAtlets() {
  /*   const queryClient = useQueryClient();
  const navigate = useNavigate(); */

  /* return useMutation(
    [QUERY_KEY], (data: any) => apiService.post(data, '/eventos'), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY]), navigate('/lista'), toast.success('¡Registro completado con exito!');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  }); */
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, "/atleta"),
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

// [QUERY_KEY], () => apiService.get('/eventos/activos'));
/*

export function useGetEventsById() {
  const { id } = useParams();
  return useQuery([QUERY_KEY, id], () => apiService.get(`/eventos/${id}`));
}

export function useGetGuestListById() {
  const { id } = useParams();
  return useQuery(['Guests', id], () => apiService.get(`/eventos/${id}/invitados`));
}
export function useGetinvitadosListAssitById() {
  const { id } = useParams();
  return useQuery(['Assits', id], () => apiService.get(`/eventos/${id}/invitados/asistentes`));
}
export function useGetinvitadosListInnassitById() {
  const { id } = useParams();
  return useQuery(['Assits', id], () => apiService.get(`/eventos/${id}/invitados/inasistentes`));
}
export function useGetAsistentesByOrganism() {
  const { id, idOrganism } = useParams();
  return useQuery(['Assits', id], () => apiService.get(`/eventos/${id}/organismo/${idOrganism}/invitados`));
}
//////////////////////////////////////////////////////////////////////////////////////////////
export function useNotification() {
  const { id } = useParams();
  return useMutation([QUERY_KEY], () => apiService.get(`notificacion/enviarcita/${id}`), {
    onSuccess: () => {
      toast.success('¡Notificaciones enviadas!');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////


export function useAddCover() {
  return useMutation((data: any) => apiService.postFile({ portada: data.portada }, `/eventos/${data.id}/portada`), {
    onSuccess: () => {
      toast.success('¡Portada creada con exito!');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function useAddGuest() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  return useMutation([QUERY_KEY], (data: any) => apiService.post(data, `/eventos/${id}/invitados`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['Guests', id]), toast.success('¡Persona invitada!');
    },
    onError: () => {
      toast.error('Error al agregar invitado a la lista');
    },
  });
}

export function useDeleteGuest() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  return useMutation(
    [QUERY_KEY],
    (data: any) => modifiedAxios.delete(`/eventos/${data.eventId}/invitados/${data.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['Guests', id]), toast.success('¡Invitacion retirada!');
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    },
  );
}

export function useValidateAssistance() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  return useMutation([QUERY_KEY], (data: any) => apiService.put(data.data, `/invitados/${data.id}/asistio`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['Guests', id]), toast.info('Asistencia modificada');
    },
  });
}

export function useConfirmationEvents() {
  let location = useLocation();
  let invitadoId = new URLSearchParams(location.search).get('invitado');

  return useMutation([QUERY_KEY], () => apiService.put(invitadoId, `/invitados/${invitadoId}/confirmado`));
}

export function useValidateEvents() {
  const queryClient = useQueryClient();

  return useMutation(['validate'], (data: any) => apiService.put(data, '/eventos/estatus'), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY]), toast.info('Estatus modificado');
    },
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation([QUERY_KEY], (data: any) => apiService.put(data.data, `/eventos/${data.id}/desactivar`), {
    onSuccess: () => {
      queryClient.invalidateQueries([[QUERY_KEY]]), toast.success('¡Evento eliminado con éxito!');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
 */
