// import { useEffect } from "react";
// import { getItems } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {
  // useEffect(() => {
  // console.log("Shopping Cart");
  //   if (props.cartItems) {
  //     props.getItems(props.cartItems);
  //   }
  //   return null;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const shoppingCart = (props) => {
    console.log(props)
   return props.cartItems.map((item) => (
      <div className="item-container shopContainer" key={item._id}>
        <Link className="image-link" to={`/list/${item._id}`}>
          <img
            className="model"
            src={`${item.image}`}
            alt={`${item.description}`}
          />
        </Link>
        <div>
          <div>
            <Link className="brand-link" to={`/list/${item._id}`}>
              <p className="brand">{item.brand}</p>
            </Link>
            <Link
              className="description-link"
              to={`/list/${item._id}`}
            >
              <p className="description">{item.description}</p>
            </Link>
            <strong>${item.price}</strong>
          </div>
          <span>Qty: </span>
          <span>Num</span>
          <button className="shop-btn add">+</button>
          <button className="shop-btn minus">-</button>
        </div>
      </div>
    ));
  };
  if (props.cartItems) {
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
  console.log(state.cart);
  return {
    cartItems: state.cart,
    // shopList: state.shoplist,
  };
};

// export default connect(mapStateToProps, { getItems })(ShoppingCart);
export default connect(mapStateToProps)(ShoppingCart);
