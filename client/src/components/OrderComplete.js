import { connect } from "react-redux";
import Loading from "../Loading";

const OrderComplete = (props) => {
  const { estimated_delivery } = props.order;

  return (
    <div>
      {!estimated_delivery ? (
        <Loading />
      ) : (
        <div className="main">
          <div>
            <p className="order-complete">
              Order Completed! Thank you!
              <div className="order-complete__delivery-date">
                Your package should be arriving 3-5 days from your purchase
                date. The lastest they arrive will be{" "}
                {estimated_delivery.substring(0, 15)}.
              </div>
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
