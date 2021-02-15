import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartCount } from "./components/SharedComponents";
const Navbar = (props) => {
  // const cartCount = () => {
  //   let sum = 0;
  //   props.cart.map((item) => {
  //     return (sum += item.quantity);
  //   });
  //   return sum;
  // };

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
              <span class="fa-layers fa-fw fa-lg">
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span
                  class="fa-layers-counter fa-inverse fa-2x"
                  style={{ background: "none", fontWeight: "800" }}
                >
                  {cartCount(props)}
                </span>
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
