import { connect } from "react-redux";

const OrderComplete = (props) => {
    const onConsole = () => {
        // console.log(order);
        console.log(props.order);
      };
  return (
    <div className="container">
      <button onClick={onConsole}>Console Log</button>
      <div className="order-complete-msg">Order Completed! Thank you!</div>
      {/* <div className="shipping-status">{shippingStatus()}</div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.cart.order,
  };
};

export default connect(mapStateToProps)(OrderComplete);
