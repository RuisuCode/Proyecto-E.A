import { Stack, CircularProgress } from "@mui/material";

export default function Loader(size: any, mt: number) {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight="100%">
      <CircularProgress sx={{ mt: mt }} size={ `${size}` } color="primary" />
    </Stack>
  );
}
