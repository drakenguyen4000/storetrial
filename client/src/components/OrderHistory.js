import { useEffect } from "react";
import { connect } from "react-redux";
import { getList, getHistory, updateFeature } from "../action";
import FeatureBar from "../FeatureBar";
  
const OrderHistory = (props) => {
  const { list, getList, getHistory, updateFeature } = props;
  useEffect(() => {
    getHistory(props.auth.user._id);
    updateFeature();
    return list.length === 0 ? getList() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { orderhistory } = props;

  const listOrders = (order) => {
    return (
      <div key={order._id}>
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
              <div className="history__wrapper" key={item._id}>
                <div>
                  <img className="history__image" src={`${item.image}`} alt={`${item.description}`} />
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
      <div className="main">
        <div className="history">
          <h1>Order History</h1>
          {orderhistory.length === 0
            ? null
            : orderhistory.map((order) => {
                return listOrders(order);
              })}
        </div>
      </div>
      <FeatureBar />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orderhistory: state.item.orderhistory,
    auth: state.auth,
    list: state.item.items,
  };
};

export default connect(mapStateToProps, { getHistory, updateFeature, getList })(
  OrderHistory
);
