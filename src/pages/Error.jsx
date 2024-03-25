import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center h-[90vh] text-center">
      <div className="space-y-5">
        <h1 className="text-7xl">Oops!</h1>
        <p className="text-5xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-3xl">{error.statusText || error.message}</i>
        </p>
        <Link to='/' className="btn btn-wide ">Go back</Link>
      </div>
    </div>
  );
};

export default Error;
