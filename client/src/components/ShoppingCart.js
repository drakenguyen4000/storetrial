import { useEffect } from "react";
import { getItems } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {
  console.log("Shopping Cart");
  useEffect(() => {
    if (props.cartItems) {
      props.getItems(props.cartItems);
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shoppingCart = (props) => {
   return props.shopList.map((item) => (
      <div className="item-container shopContainer" key={item[0]._id}>
        <Link className="image-link" to={`/list/${item[0]._id}`}>
          <img
            className="model"
            src={`${item[0].image}`}
            alt={`${item[0].description}`}
          />
        </Link>
        <div>
          <div>
            <Link className="brand-link" to={`/list/${item[0]._id}`}>
              <p className="brand">{item[0].brand}</p>
            </Link>
            <Link
              className="description-link"
              to={`/list/${item[0]._id}`}
            >
              <p className="description">{item[0].description}</p>
            </Link>
            <strong>{item[0].price}</strong>
          </div>
          <span>Qty: </span>
          <span>Num</span>
          <button className="shop-btn add">+</button>
          <button className="shop-btn minus">-</button>
        </div>
      </div>
    ));
  };
  if (props.shopList) {
    return (
      <div className="container">
        <h2>Shopping Cart</h2>
        {shoppingCart(props)}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="itemContainer">
        <h2>Your Cart is Empty</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.shoplist);
  return {
    cartItems: state.cart,
    shopList: state.shoplist,
  };
};

export default connect(mapStateToProps, { getItems })(ShoppingCart);
