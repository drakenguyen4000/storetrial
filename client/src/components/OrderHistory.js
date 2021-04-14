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
        <div className="order-title">
          <strong>
            <span>Purchase Date: {order.purchase_date.slice(0, 10)} </span></strong>
            <em>
            <span className="order-total">Total Cost: ${order.total_cost}</span>
            </em>
        </div>
        {/* <span>Total Cost: ${order.total_cost}</span> */}
        <div>
          {order.items_ordered.map((item) => {
            // console.log(item);
            return (
              <div className="order-grid">
                <div>
                  <img className="order-image" src={`${item.image}`} />
                  <div className="order-details">{item.brand}</div>
                  <span className="order-details-2">${item.price} / </span>
                  <span className="order-details-2">Qty: {item.quantity}</span>
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
    <div className="container">
      <strong>
        <h2>Your Order History</h2>
      </strong>
      <button onClick={onConsole}>Console</button>
      <div className="order-wrap">
        {props.history.map((order) => {
          // console.log("map running")
          return listOrder(order);
        })}
      </div>
    </div>
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
