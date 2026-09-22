import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function NotFound() {
  return (
    <div className="notfound">
      <span className="notfound-code">404</span>
      <p className="notfound-text">Page Not Found</p>
      <Link to="/" className="btn-glow btn-primary">
        <FiArrowLeft /> Back Home
      </Link>
    </div>
  );
}

export default NotFound;
