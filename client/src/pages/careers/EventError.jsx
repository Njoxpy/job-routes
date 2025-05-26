import { NavLink, useRouteError } from "react-router-dom";

const EventError = () => {
  const error = useRouteError();
  return (
    <div className="p-8">
      <h1>Not Found</h1>
      <p>{error.message}</p>
      <p>
        Retrun to <NavLink to="/" className="text-blue-700">Homepage</NavLink>
      </p>
    </div>
  );
};

export default EventError;
