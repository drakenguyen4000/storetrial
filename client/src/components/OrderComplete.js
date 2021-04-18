import { connect } from "react-redux";

const OrderComplete = (props) => {
  const onConsole = () => {
    console.log(props.order);
  };
  return (
    <div className="main">
      <button className="button" onClick={onConsole}>Console Log</button>
      <div>
      <p className="order-complete">
        Order Completed! Thank you!
        <div className="order-complete__delivery-date">
          Your package should be arriving 3-5 days from your purchase date.
          The lastest they arrive will be{" "}
          {props.order.estimated_delivery.substring(0, 15)}.
        </div>
      </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    order: state.cart.order.data,
  };
};

export default connect(mapStateToProps)(OrderComplete);
