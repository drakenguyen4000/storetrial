//orderHistory action
//axios call route history
//Backend - find by user._id
//push to reducer
// grab from mapstatetoprops
//map over each order
//Display Order History Date // Item Price
//List Item

import { useEffect } from "react";
import { connect } from "react-redux";
import { getHistory } from "../action";
import FeatureBar from "../FeatureBar";

const OrderHistory = (props) => {
  useEffect(() => {
    props.getHistory(props.auth.user._id);
  }, []);

  const onConsole = () => {
    console.log(props.history);
  };

  const listOrder = (order) => {
    //   console.log("function running")
    return (
      <div>
        <div className="history__purchase-total-group">
          <strong>
            <span>Purchase Date: {order.purchase_date.slice(0, 10)} </span>
          </strong>
          <em>
            <span>
              Total Cost: ${order.total_cost}
            </span>
          </em>
        </div>
        <div>
          {order.items_ordered.map((item) => {
            return (
              <div className="history__wrapper">
                <div>
                  <img className="history__image" src={`${item.image}`} />
                  <div className="history__details">{item.brand}</div>
                  <span className="history__details-2">
                    ${item.price} /
                  </span>
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
      <div className="main">
        <button className="button" onClick={onConsole}>Console</button>
        <div className="history">
          <h2>Order History</h2>
          <hr />
          {props.history.map((order) => {
            return listOrder(order);
          })}
        </div>
      </div>
      <FeatureBar />
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
// export default OrderHistory;
