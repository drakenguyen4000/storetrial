import { useEffect } from "react";
import { getItems } from "../action";
import { connect } from "react-redux";

const ShoppingCart = (props) => {
  useEffect(() => {
    props.getItems(props.cartItems);
  });

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      <div>Stock</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.shoplist);
  return {
    cartItems: state.cart,
  };
};

export default connect(mapStateToProps, { getItems })(ShoppingCart);
