import { Stack, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress size="lg" color="primary" />
    </Stack>
  );
}
