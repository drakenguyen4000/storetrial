import { useEffect } from "react";
import { getItems } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {
  console.log("Shopping Cart")
  useEffect(() => {
    if (props.cartItems) {
      props.getItems(props.cartItems);
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.shopList) {
    return (
      <div className="container">
        <h2>Shopping Cart</h2>
        <div className="itemContainer shopContainer" key={props.shopList._id}>
          <Link className="image-link" to={`/list/${props.shopList._id}`}>
            <img
              className="model"
              src={`${props.shopList.image}`}
              alt={`${props.shopList.description}`}
            />
          </Link>
          <div>
            <div>
              <Link className="brand-link" to={`/list/${props.shopList._id}`}>
                <p className="brand">{props.shopList.brand}</p>
              </Link>
              <Link
                className="description-link"
                to={`/list/${props.shopList._id}`}
              >
                <p className="description">{props.shopList.description}</p>
              </Link>
              <strong>{props.shopList.price}</strong>
            </div>
            <span>Qty: </span>
            <span>Num</span>
            <button className="shop-btn add">+</button>
            <button className="shop-btn minus">-</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="itemContainer">
        <strong>Your Cart is Empty</strong>
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
