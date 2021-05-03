import { useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";

const OrderComplete = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { estimated_delivery } = props.order;

  return (
    <div className="main">
      {!estimated_delivery ? (
        <Loading />
      ) : (
        <div className="order-complete">
          <div className="order-complete__title">eApparel</div>
          <div className="order-complete__delivery-date">
            <p>Order Completed! Thank you!</p>
            <p>
              Your package should be arriving 3-5 days from your purchase date.
              The lastest they arrive will be{" "}
              {estimated_delivery.substring(0, 15)}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.cart.order.data,
  };
};

export default connect(mapStateToProps)(OrderComplete);
