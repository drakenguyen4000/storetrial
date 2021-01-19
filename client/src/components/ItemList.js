import { connect } from "react-redux";
import { getList, showItem, addItem } from "../action";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  useEffect(() => {
    console.log("Item list");
    props.getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.list) {
    return (
      <div className="container">
        <h2>ItemList</h2>
        <div className="list-grid">
          {props.list.map((item) => {
            return (
              <div className="item-container" key={item._id}>
                <Link className="image-link" to={`/list/${item._id}`}>
                  <img
                    className="model"
                    src={`${item.image}`}
                    alt={`${item.description}`}
                  />
                </Link>
                <Link className="brand-link" to={`/list/${item._id}`}>
                  <p className="brand">{item.brand}</p>
                </Link>
                <Link className="description-link" to={`/list/${item._id}`}>
                  <p className="description">{item.description}</p>
                </Link>
                <p className="price">
                  <strong>${item.price}</strong>
                </p>
                {/* <button onClick={() => props.addItem(item._id)}> */}
                <button onClick={() => props.addItem(item)}>
                  Add to Cart
                </button>
                <Link to={`/shoppingcart`}>
                  <button onClick={() => props.addItem(item)}>Buy Now</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.items,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { getList, showItem, addItem })(
  ItemList
);
