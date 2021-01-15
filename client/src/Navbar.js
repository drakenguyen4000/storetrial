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
        <Link to={`/shoppingcart`}>
          <li>
            <button className="shoppingCart-btn">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
