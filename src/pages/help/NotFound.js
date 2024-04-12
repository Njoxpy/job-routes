import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="h2">Not Found</h2>
      <p className="text-lead">Oops! The page you're looking for cannot be found.</p>
      <p className="">
        Return to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
