import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="min-h-screen flex flex-col space-y-8 items-center justify-center mx-auto pattern-bg">
          <h1 className="px-5 lg:px-0">404 – Page Not Found</h1>
          <button className="rounded-full flex justify-between border-2  px-8 py-4 text-center  uppercase shadow-md shadow-gray-600  hover:border-white transition duration-500 cursor-pointer bg-green-900 border-green-900 text-white">
            <Link to="/">
              go back to homepage <Undo2 className="inline-block"/>
            </Link>
          </button>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center mx-auto pattern-bg">
          <h1 className="px-5 lg:px-0">Oops - Something went wrong</h1>
          <button className="rounded-full flex justify-between border-2  px-8 py-4 text-center  uppercase shadow-md shadow-gray-600  hover:border-white transition duration-500 cursor-pointer bg-green-900 border-green-900 text-white">
            <Link to="/">
              go back to homepage <Undo2 className="inline-block"/>
            </Link>
          </button>
        </div>
  );
};

export default Error;
