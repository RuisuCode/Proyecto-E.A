import {
  useMutation /* useQuery, useQueryClient */,
} from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import modifiedAxios from '../interceptors/axios.interceptor';

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
  return useMutation({
    mutationFn: (data: any) => apiService.post(data, "/atleta"),
    onSuccess: () => {
      toast.success("Éxito al agregar atleta");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      const statusResponse = error.response?.status;

      if (statusResponse === 404) {
        toast.error(`A ocurrido un error inesperado ${statusResponse} `);
        return;
      }
    },
  });
}
/* export function useGetEventos() {
  return useQuery([QUERY_KEY], () => apiService.get('/eventos/activos'));
}

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
