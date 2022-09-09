import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserAlt /> Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
