import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-8">
      <h2 className="font-bold">Not Found</h2>
      <div className="border-l-6 p-2">
      <p className="text-lead">Oops! The page you're looking for cannot be found.</p>
      <p className="">
        Return to <Link to="/" className="text-blue-700 hover:underline font-semibold">HomePage</Link>
      </p>
      </div>
    </div>
  );
};

export default NotFound;
