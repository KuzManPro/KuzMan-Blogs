import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>That page cannot be found...</p>
      <Link to="/">
        <button>Back to the homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
