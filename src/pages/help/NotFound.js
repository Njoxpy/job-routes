import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Oops! The page you're looking for cannot be found.</p>
      <p>
        Return to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
