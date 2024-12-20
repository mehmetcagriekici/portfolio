import { ErrorProps } from "../utils/types";

function Error({ errorMessage }: ErrorProps) {
  return <div>{errorMessage}</div>;
}

export default Error;
