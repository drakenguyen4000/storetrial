import "../components/Stripe.css";
import StripeCheckout from "react-stripe-checkout";
import { cartCount } from "./SharedComponents";
import { checkOut } from "../action";
import { connect } from "react-redux";
import FeatureBar from "../FeatureBar";

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
    <>
      <div className="main">
        <button onClick={onConsole}>Console Log</button>
        <div className="checkout">
          <div>
            <div className="checkout__title">Checkout</div>
            <div className="checkout__panel">
              <ul className="checkout__labels-group">
                <li className="checkout__label">{cartCount(props)} item(s)</li>
                <li className="checkout__label">Shipping Cost</li>
                <li className="checkout__label">Free Shipping</li>
                <li className="checkout__total-before-tax">Total Before Tax</li>
                <li className="checkout__label">Taxes</li>
                <li className="checkout__total">Total</li>
              </ul>
              <ul className="checkout__values-group">
                <li className="checkout__subtotal">${subTotal()}</li>
                <li className="checkout__shipping">${shipping}</li>
                <li className="checkout__free-shipping">-${freeShipping()}</li>
                <li className="checkout__total-before-tax">${beforeTax()}</li>
                <li className="checkout__tax">${taxCal()}</li>
                <li className="checkout__total">${salesTotal()}</li>
                <br/>
                <li>
                <StripeCheckout
                  stripeKey="pk_test_51IYjrzC8wjT1tp4m0Y0qZ5LCHVjO2yu5zqNJzLzpVgwKCR11N9khEApXI0pdIkms7p9Tfz3Lq66pOJi2eSo5NaZ6004w0mshLZ"
                  token={handleToken}
                  amount={salesTotal() * 100}
                  name="eApparel"
                  billingAddress 
                  shippingAddress 
                />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FeatureBar />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { checkOut })(CheckOut);
