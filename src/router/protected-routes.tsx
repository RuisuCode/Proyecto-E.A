import { useMutation, useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { apiService } from "../shared/consts/API_SERVICES";
import { useEffect } from "react";

//Local
import Loader from "../shared/components/Loader";
import { toast } from "react-toastify";

const QUERY_KEY = "verifyToken";

export function ProtectedRoutes() {
  /* const {isLoading,isError} =  return useQuery({
  queryKey: ['verifyToken'],
  queryFn: () =>  apiService.get("verify_token"),
}) */

  /* const { isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => apiService.post(data, "/verify_token"),
  }); */
  const { isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => apiService.get("/verify_token"),
  });
  const { mutateAsync } = useMutation({
    mutationFn: () => apiService.get("/verify_token"),
    onError: () => {
      toast.warning("Sesión Caducada");
      sessionStorage.removeItem("auth");
      navigate("/");
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const intervalo = setInterval(mutateAsync, 600000); // Ejecutar cada 500000ms (5 minutos)

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (isError) {
      sessionStorage.removeItem("auth");
      navigate("/");
    }
  }, [isError, navigate]);

  if (isLoading) return <Loader />;
  return <Outlet />;
}
