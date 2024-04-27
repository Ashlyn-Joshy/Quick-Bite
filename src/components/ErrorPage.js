import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1>
        {error.status} {error.statusText}
      </h1>
      <h2>Oops!!</h2>
      <h2>Something went wrong 🥹</h2>
    </div>
  );
};

export default ErrorPage;
