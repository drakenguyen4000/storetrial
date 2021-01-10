import { connect } from "react-redux";
import { getItems, selectedItem } from "../action";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  if (props.list) {
    return (
      <div className="container">
        <h2>ItemList</h2>
        <div className="list-grid">
          {props.list.map((item) => {
            return (
              <div className="itemContainer" key={item._id}>
                <Link to={`/list/${item._id}`}>
                  <img 
                    className="model"
                    src={`${item.image}`}
                    onClick={() => props.selectedItem(item._id)}
                    alt={`${item.description}`}
                  />
                </Link>
                <p className="brand">{item.brand}</p>
                <p className="description">{item.description}</p>
                <p className="price"><strong>{item.price}</strong></p>
                <button onClick={() => props.selectedItem(item)}>
                  Add to Cart
                </button>
                <Link to="/cart">
                  <button onClick={() => props.selectedItem(item)}>
                    Buy Now
                  </button>
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
  // console.log(state)
  return {
    list: state.items,
  };
};

export default connect(mapStateToProps, { getItems, selectedItem })(ItemList);