import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { apiService } from "../shared/consts/API_SERVICES";
import { useEffect } from "react";

//Local
import Loader from "../shared/components/Loader";

const QUERY_KEY = "verifyToken";

export function ProtectedRoutes() {
  const { isLoading, isError } = useQuery([QUERY_KEY], () =>
    apiService.get("tokenVerify")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) navigate("/");
  }, [isError, navigate]);

  if (isLoading) return <Loader />;
  return <Outlet />;
}
