//imports
import { Box, CircularProgress } from "@mui/material";

const RocketLoader = () => {
  return (
    <Box className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5 h-1/6 w-4/5 rounded-full bg-gray-300/80">
      <CircularProgress />
      <CircularProgress />
      <CircularProgress />
    </Box>
  );
};

export default RocketLoader;
