import "../components/Stripe.css";
import StripeCheckout from "react-stripe-checkout";
import { cartCount } from "./SharedComponents";
import { checkOut } from "../action";
import { connect } from "react-redux";

const CheckOut = (props) => {
  const { cart, checkOut } = props;
  const { _id } = props.auth.user;

  const onConsole = () => {
    console.log(cart);
    console.log(props.auth);
    console.log(props.auth.user);
    console.log(_id);
  };

  const handleToken = (token) => {
    const order = {
      items_ordered: cart,
      user_id: _id,
      name: `clothing`,
      salesTotal: salesTotal(),
      description: `${cart[0].brand} dress`,
    };
    checkOut(token, order);
  };

  //Update Item Quantity in Cart
  const subTotal = () => {
    let sum = 0;
    cart.map((item) => {
      return (sum += item.quantity * item.price);
    });
    return parseFloat(sum.toFixed(2));
  };

  //Calculate Tax
  const taxCal = () => {
    return parseFloat((subTotal() * 0.1).toFixed(2));
  };

  const shipping = 12.99;

  //Determines freeshipping eligibility
  const freeShipping = () => {
    const freeship = subTotal() > 20 ? shipping : 0;
    return parseFloat(freeship.toFixed(2));
  };

  //subtotal before taxes
  const beforeTax = () => {
    const bfTax = subTotal() + shipping - freeShipping();
    return parseFloat(bfTax.toFixed(2));
  };

  //total
  const salesTotal = () => {
    const salesTax = beforeTax() + taxCal();
    return parseFloat(salesTax.toFixed(2));
  };

  return (
    <div className="container">
      <div className="product">
        <h2>Checkout</h2>
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
          <StripeCheckout
            stripeKey="pk_test_51IYjrzC8wjT1tp4m0Y0qZ5LCHVjO2yu5zqNJzLzpVgwKCR11N9khEApXI0pdIkms7p9Tfz3Lq66pOJi2eSo5NaZ6004w0mshLZ"
            token={handleToken}
            // token={strpOrder}
            amount={salesTotal() * 100}
            name="eApparel"   
            billingAddress //Will enable billing address feature
            shippingAddress //Will enable shipping address feature
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { checkOut })(CheckOut);
