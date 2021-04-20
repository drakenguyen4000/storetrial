import { useEffect } from "react";
import { connect } from "react-redux";
import { getHistory } from "../action";
import FeatureBar from "../FeatureBar";
import Loading from "../Loading";

const OrderHistory = (props) => {
  useEffect(() => {
    props.getHistory(props.auth.user._id);
  }, []);
  const { history } = props;

  const listOrders = (order) => {
    return (
      <div>
        <div className="history__purchase-total-group">
          <strong>
            <span>Purchase Date: {order.purchase_date.slice(0, 10)} </span>
          </strong>
          <em>
            <span>Total Cost: ${order.total_cost}</span>
          </em>
        </div>
        <div>
          {order.items_ordered.map((item) => {
            return (
              <div className="history__wrapper">
                <div>
                  <img className="history__image" src={`${item.image}`} />
                  <div className="history__details">{item.brand}</div>
                  <span className="history__details-2">${item.price} / </span>
                  <span className="history__details-2">
                    Qty: {item.quantity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  };

  return (
    <>
      {history.length === 0 ? (
        <div className="main">
          <Loading />
        </div>
      ) : (
        <>
          <div className="main">
            <div className="history">
              <h1>Order History</h1>
              <hr />
              {history.map((order) => {
                return listOrders(order);
              })}
            </div>
          </div>
          <FeatureBar />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.cart.history,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getHistory })(OrderHistory);
