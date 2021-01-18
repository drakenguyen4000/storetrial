import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to={`/`}>
          <li>eApparel</li>
        </Link>
        <li>Apparels</li>
        <li>Accessories</li>
        <li>Active Wear</li>
        <li>Casual Wear</li>
        <li>
          <Link to={`/shoppingcart`}>
            <span className="shoppingCart-btn">
              <i className="fas fa-shopping-cart"></i>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;