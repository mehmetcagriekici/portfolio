import { Alert } from "@mui/material";
import { ErrorProps } from "../utils/types";

function Error({ errorMessage }: ErrorProps) {
  return (
    <div className="h-full w-full bg-transparent">
      <Alert severity="error">{errorMessage}</Alert>
    </div>
  );
}

export default Error;
