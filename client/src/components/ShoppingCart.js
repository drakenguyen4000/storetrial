import { connect } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  updateCartItemQty,
  changeQty,
  deleteItem,
  updateFeature,
  getList,
} from "../action";
import { message } from "../action/authActions";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { cartCount } from "./ExportVar";
import history from "../components/history";
import FeatureBar from "../FeatureBar";

const ShoppingCart = (props) => {
  const {
    changeQty,
    updateCartItemQty,
    deleteItem,
    cart,
    list,
    message,
    getList,
    updateFeature,
  } = props;
  const { isAuthenticated } = props.auth;

  useEffect(() => {
    window.scrollTo(0, 0);
    updateFeature();
    return list.length === 0 ? getList() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const cart_item_id = e.target.dataset.id;
    //Find each list item id and compare with selected cart item id.  Find the match's index.
    const index = list.findIndex((list_item) => {
      return list_item._id === cart_item_id;
    });
    changeQty(Number(index), Number(value));
  };

  //Update Item Quantity in Cart
  const updateCart = (cart_item, e, i) => {
    e.preventDefault();
    //find item in where list item id matches cart item id
    const item = list.find((list_item) => {
      return list_item._id === cart_item._id;
    });
    //Update item quantity in cart
    updateCartItemQty(i, item.quantity);
  };

  //Delete Item from Cart
  const deleteCartItem = (item, e) => {
    e.preventDefault();
    deleteItem(item);
  };

  const subTotal = () => {
    let sum = 0;
    cart.map((item) => {
      return (sum += item.quantity * item.price);
    });
    return sum.toFixed(2);
  };

  const checkOut = () => {
    if (isAuthenticated) {
      return cart.length === 0 ? null : history.push("/shoppingcart/checkout");
    }
    message("Please login.");
    history.push("/login");
  };

  const shoppingList = (cart) => {
    return cart.map((item, i) => (
      <div className="item shop-wrapper" key={item._id}>
        <Link className="image-link" to={`/list/${item.category}/${item._id}`}>
          <img
            className="item__image"
            src={`${item.image}`}
            alt={`${item.description}`}
          />
        </Link>
        <div className="item__cart-description-wrapper ">
          <div>
            <Link
              className="item__brand-link"
              to={`/list/${item.category}/${item._id}`}
            >
              <p className="item__brand">{item.brand}</p>
            </Link>
            <Link
              className="item__description-link"
              to={`/list/${item.category}/${item._id}`}
            >
              <p className="item__description">{item.description}</p>
            </Link>
            <strong>${item.price}</strong>
          </div>
          <Form>
            <FormGroup>
              <Label>Qty: </Label>
              <Input
                type="select"
                name="quantity"
                className="input__quantity"
                defaultValue={item.quantity}
                onChange={onChange}
                data-id={item._id}
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
              <button
                className="button shop-btn"
                onClick={(e) => updateCart(item, e, i)}
              >
                Update
              </button>
              <button
                className="button shop-btn "
                onClick={(e) => deleteCartItem(item, e)}
              >
                Delete
              </button>
            </div>
          </Form>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="main">
        <div>
          {cart.length === 0 ? <h2>Your is Empty</h2> : <h2>Your Cart</h2>}
          {shoppingList(cart)}
          <hr />
          <div className="total">
            <span className="total__title">Subtotal</span>
            <span className="total__item-count">
              {cartCount(props)} item(s)
            </span>
            <span className="total__sub-total">${subTotal()}</span>
            <span>
              <button className="button checkout-btn" onClick={checkOut}>
                CheckOut
              </button>
            </span>
          </div>
        </div>
      </div>
      <FeatureBar />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    list: state.item.items,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  updateCartItemQty,
  changeQty,
  deleteItem,
  getList,
  updateFeature,
  message,
})(ShoppingCart);
