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
        <RegisterModal />
      </li>
      <Link className="nav__item" to={`/login`}>
        <li>Login</li>
      </Link>
    </>
  );

  return (
    <nav className="nav">
      <ul className="navbars nav__top">
      {isAuthenticated ? authLinks : guestLinks}
      {/* <li className="nav__item shopping__cart__btn"> */}
          <Link className="nav__item shopping__cart__btn" to={`/shoppingcart`} replace>
          <li>
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
            </li>
          </Link>
        {/* </li> */}
      </ul>
      <ul className="navbars nav__bottom">
        <Link className="nav__item" to={`/home`} replace>
          <li>eApparel</li>
        </Link>
        <Link className="nav__item" to={`/list/men`} replace>
          <li >Men</li>
        </Link>
        <Link className="nav__item" to={`/list/women`} replace>
          <li >Women</li>
        </Link>
        <Link className="nav__item" to={`/list/boys`} replace>
          <li>Boys</li>
        </Link>
        <Link className="nav__item" to={`/list/girls`} replace>
          <li>Girls</li>
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
