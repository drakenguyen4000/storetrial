import { connect } from "react-redux";
import { getList, showItem, addItem } from "../action";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  useEffect(() => {
    props.getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.list) {
    return (
      <div className="container">
        <Link to={`/list/shoppingcart`}>
          <button className="shoppingCart-btn">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </Link>
        <h2>ItemList</h2>
        <div className="list-grid">
          {props.list.map((item) => {
            return (
              <div className="itemContainer" key={item._id}>
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
                  <strong>{item.price}</strong>
                </p>
                {/* onClick Add Item to Cart */}
                <button onClick={() => props.addItem(item._id)}>
                  Add to Cart
                </button>
                <Link to={`/list/shoppingcart`}>
                  <button>Buy Now</button>
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
