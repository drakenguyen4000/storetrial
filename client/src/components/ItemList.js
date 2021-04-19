import { connect } from "react-redux";
import {
  getList,
  showItem,
  addToCart,
  changeQty,
  updateCartItemQty,
  updateFeature,
} from "../action";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Input, Form, FormGroup, Label } from "reactstrap";
import Loading from "./Loading";
import FeatureBar from "../FeatureBar";

const ItemList = (props) => {
  const {
    getList,
    changeQty,
    addToCart,
    updateCartItemQty,
    cart,
    list,
    updateFeature,
  } = props;
  const { category } = useParams();

  useEffect(() => {
    updateFeature(category);
    return list.length === 0 ? getList(category) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const onConsole = () => {
    // console.log(list);
    console.log(props);
    console.log(props.auth);
    console.log(props.cat);
  };

  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const { index } = e.target.dataset;
    changeQty(Number(index), Number(value));
  };

  const logicCart = (item, e, buynow) => {
    e.preventDefault();
    if (!cart) {
      //Add item to cart array
      addToCart(item, buynow);
    } else {
      //find the index where cart._id matches item._id
      const index = cart.findIndex((cart) => {
        return cart._id === item._id;
      });
      if (index !== -1) {
        //index exist
        updateCartItemQty(index, item.quantity, buynow);
      } else {
        //index doesn't exist
        addToCart(item, buynow);
      }
    }
  };

  const onBuy = (item, e, buynow) => {
    return item.quantity > 0 ? logicCart(item, e, buynow) : null;
  };

  const displayItem = (item, i) => {
    return (
      <div className="item" key={item._id}>
        <Link
          to={`/list/${category}/${item._id}`}
        >
          <img
            className="item__image"
            src={`${item.image}`}
            alt={`${item.description}`}
          />
        </Link>
        <Link className="item__brand-link" to={`/list/${category}/${item._id}`}>
          <p className="item__brand">{item.brand}</p>
        </Link>
        <Link
          className="item__description-link"
          to={`/list/${category}/${item._id}`}
        >
          <p className="item__description">{item.description}</p>
        </Link>
        <p className="item__price">
          <strong>${item.price}</strong>
        </p>
        <Form>
          <FormGroup>
            <Label>Qty: </Label>
            <Input
              type="select"
              name="quantity"
              className="input__quantity"
              onChange={onChange}
              data-index={i}
              required
            >
              <option value="">--Select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Input>
          </FormGroup>
          <div>
            <button className="button" onClick={(e) => onBuy(item, e)}>
              Add
            </button>
            <button
              className="button"
              onClick={(e) => onBuy(item, e, "buynow")}
            >
              Buy Now
            </button>
          </div>
        </Form>
      </div>
    );
  };

  return (
    <>
      {!list ? (
        <Loading />
      ) : (
          <>
            <div className="main">
              <div className="category">
                <h1 className="category__title">{category}</h1>
                <button className="button" onClick={onConsole}>
                  Console Log
                </button>
                <div className="item-wrapper">
                  {list.map((item, i) => {
                    return item.category === category
                      ? displayItem(item, i)
                      : null;
                  })}
                </div>
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
    list: state.item.items,
    cart: state.cart.cart,
    auth: state.auth,
    cat: state.item.category,
  };
};

export default connect(mapStateToProps, {
  getList,
  showItem,
  changeQty,
  addToCart,
  updateCartItemQty,
  updateFeature,
})(ItemList);
