import {
  useMutation /* useQuery, useQueryClient */,
} from "@tanstack/react-query";
import { apiService } from "../consts/API_SERVICES";
import { toast } from "react-toastify";

// const QUERY_KEY = 'atletas';

//   export function usePruebas() {
// const {id}=useParams();
//     return useMutation({
//       mutationFn: (data: any) => apiService.post(data, `/pruebas`),
//       onSuccess: () => {
//         toast.success("Éxito al agregar marca");
//       },
//       onError: (error: any) => {
//         const statusResponse = error.response?.status;
//         {
//           error.response.data?.message.map((item: any) => {
//             toast.error(item.message);
//           });
//         }
//         if (statusResponse === 404) {
//           toast.error(`A ocurrido un error inesperado ${statusResponse} `);
//           return;
//         }
//       },
//     });
//   }
export function PruebasCampo() {
  const pruebas = useMutation({
    mutationFn: () => apiService.get("/pruebasCampo"),
    onError: () => {
      toast.error("Error al obtener pruebas");
    },
  });
  return pruebas;
}
export function PruebasPista() {
  const pruebas = useMutation({
    mutationFn: () => apiService.get("/pruebasPista"),
    onError: () => {
      toast.error("Error al obtener pruebas");
    },
  });
  return pruebas;
}
