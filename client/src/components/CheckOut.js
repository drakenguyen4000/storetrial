import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartCount } from "./SharedComponents";
import { placeOrder } from "../action";

const CheckOut = (props) => {
  const { updateCartItemQty, cart, list, placeOrder } = props;
  const onConsole = () => {
    console.log(list);
    console.log(cart);
  };

  const Order = () => {
    const total_cost = salesTotal();
    const order = {
      total_cost,
      items_ordered: cart

    };
    placeOrder(order);
  };

  // const estimatedDelivery = () => {
  // }

  //Update Item Quantity in Cart
  const subTotal = () => {
    let sum = 0;
    cart.map((item) => {
      return (sum += item.quantity * item.price);
    });
    console.log(sum);
    return sum;
  };
  //Calculate Tax
  const taxCal = () => {
    return Number((subTotal() * 0.1).toFixed(2));
  };

  const shipping = 12.99;

  //Determines freeshipping eligibility
  const freeShipping = () => {
    return subTotal() > 20 ? shipping : 0;
  };

  //subtotal before taxes
  const beforeTax = () => {
    return subTotal() + shipping - freeShipping();
  };

  //total
  const salesTotal = () => {
    return Number(beforeTax() + taxCal());
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <button onClick={onConsole}>Console Log</button>
      <div className="your-order">Your Order</div>
      <div className="checkout-container">
        <ul className="sales-title-group">
          <li className="">{cartCount(props)} item(s)</li>
          <li className="sales-title">Shipping Cost</li>
          <li className="sales-title">Free Shipping</li>
          <li className="total-before-tax">Total Before Tax</li>
          <li className="sales-title">Taxes</li>
          <li className="sales-total">Total</li>
        </ul>
        <ul className="sales-number-group">
          <li className="">${subTotal()}</li>
          <li className="tax">${shipping}</li>
          <li className="free">-${freeShipping()}</li>
          <li className="total-before-tax">${beforeTax()}</li>
          <li className="tax">${taxCal()}</li>
          <li className="sales-total">${salesTotal()}</li>
        </ul>
        {/* <Link to={`/shoppingcart/ordercomplete`}> */}
        <button onClick={Order}>Place Order</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, { placeOrder })(CheckOut);
