import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartCount } from "./components/ExportVar";
import RegisterModal from "./components/auth/RegisterModal";
import Logout from "./components/auth/Logout";
import { getList } from "./action/index";

const Navbar = (props) => {
  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <>
      <li className="nav__welcome">
        {user ? `Welcome ${user.name}!` : null}
      </li>
      <Link to={user ? `/orderhistory/${user._id}` : null}>
        <li className="nav__item navbar__item-right">History</li>
      </Link>
      <li className="nav__item navbar__item-right">
        <Logout />
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav__item">
        <RegisterModal className="nav__item " />
      </li>
      <Link to={`/login`}>
        <li className="nav__item">Login</li>
      </Link>
    </>
  );

  return (
    <nav className="nav">
      <ul className="nav__top">
      {isAuthenticated ? authLinks : guestLinks}
      <li className="nav__item shopping__cart__btn">
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
      <ul className="nav__bottom">
        <Link to={`/home`} replace>
          <li className="nav__item">eApparel</li>
        </Link>
        <Link to={`/list/men`} replace>
          <li className="nav__item">Men</li>
        </Link>
        <Link to={`/list/women`} replace>
          <li className="nav__item">Women</li>
        </Link>
        <Link to={`/list/boys`} replace>
          <li className="nav__item">Boys</li>
        </Link>
        <Link to={`/list/girls`} replace>
          <li className="nav__item">Girls</li>
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
