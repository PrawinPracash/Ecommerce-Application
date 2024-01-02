import { Link } from "react-router-dom";
import './index.css'
function Header() {
  return (
    <nav className="nav-header">
      <nav className="nav-content">
      <img
          className="website-logo"
          src="https://drive.google.com/uc?=view=export&id=1TXDxk_NafVxW4ckRlcna0sw7zcX4pca8"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;
