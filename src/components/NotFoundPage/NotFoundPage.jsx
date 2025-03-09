import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Not Found!</p>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
