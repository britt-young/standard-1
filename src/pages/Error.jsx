import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1>404 – Page Not Found</h1>;
    }
  }

  return <h1>Something went wrong</h1>;
}

export default Error