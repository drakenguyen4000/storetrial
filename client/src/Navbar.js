import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartCount } from "./components/SharedComponents";
import RegisterModal from "./components/auth/RegisterModal";
// import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import { getList } from "./action/index";

const Navbar = (props) => {
  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <>
      <li className="navbar__welcome">
        {user ? `Welcome ${user.name}!` : null}
      </li>
      <Link to={user ? `/orderhistory/${user._id}` : null}>
        <li className="navbar__item navbar__item-right">Order History</li>
      </Link>
      <li className="navbar__item navbar__item-right">
        <Logout />
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="navbar__item">
        <RegisterModal />
      </li>
      <Link to={`/login`}>
        <li className="navbar__item">Login</li>
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <ul className="navbar__top">
      {isAuthenticated ? authLinks : guestLinks}
      <li className="navbar__item shopping__cart__btn">
          <Link to={`/shoppingcart`} replace>
            <span className="shopping-cart-btn">
              <span className="fa-layers fa-fw fa-lg">
                <i className="fas fa-shopping-cart fa-lg"></i>
                <span
                  className="fa-layers-counter fa-inverse fa-2x"
                  style={{ background: "none", fontWeight: "800" }}
                >
                  {cartCount(props)}
                </span>
              </span>
            </span>
          </Link>
        </li>
      </ul>
      <ul className="navbar__bottom">
        <Link to={`/home`} replace>
          <li className="navbar__item">eApparel</li>
        </Link>
        <Link to={`/list/men`} replace>
          <li className="navbar__item">Men</li>
        </Link>
        <Link to={`/list/women`} replace>
          <li className="navbar__item">Women</li>
        </Link>
        <Link to={`/list/boys`} replace>
          <li className="navbar__item">Boys</li>
        </Link>
        <Link to={`/list/girls`} replace>
          <li className="navbar__item">Girls</li>
        </Link>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getList })(Navbar);
