import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCartItemQty, changeQty, deleteItem } from "../action";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { cartCount } from "./SharedComponents";

const ShoppingCart = (props) => {
  const { changeQty, updateCartItemQty, deleteItem, cart, list } = props;
  const onConsole = () => {
    console.log(list);
    console.log(cart);
  };

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
    console.log(sum);
    return sum;
  };

  const taxCal = () => {
    return Number((subTotal() * 0.1).toFixed(2));
  };

  const salesTotal = () => {
    return Number(subTotal() + taxCal());
  };

  const shoppingList = (cart) => {
    return cart.map((item, i) => (
      <div className="item-container shopContainer" key={item._id}>
        <Link className="image-link" to={`/list/${item._id}`}>
          <img
            className="model"
            src={`${item.image}`}
            alt={`${item.description}`}
            // alt="model"
          />
        </Link>
        <div>
          <div>
            <Link className="brand-link" to={`/list/${item._id}`}>
              <p className="brand">{item.brand}</p>
            </Link>
            <Link className="description-link" to={`/list/${item._id}`}>
              <p className="description">{item.description}</p>
            </Link>
            <strong>${item.price}</strong>
          </div>
          <Form>
            <FormGroup>
              <Label>Qty: </Label>
              <Input
                type="select"
                name="quantity"
                className="quantity_input"
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
            <button onClick={(e) => updateCart(item, e, i)}>Update</button>
            <button onClick={(e) => deleteCartItem(item, e)}>Delete</button>
          </Form>
        </div>
      </div>
    ));
  };
  if (cart) {
    return (
      <div className="container">
        <h2>Shopping Cart</h2>
        <button onClick={onConsole}>Console Log</button>
        {shoppingList(cart)}
        <hr />
        <div className="total-container">
          <span className="total-title">Subtotal</span>
          <span className="item-count">{cartCount(props)} item(s)</span>
          <span>
            <span className="sub-total">${subTotal()}</span>
            {/* <span className="sales-total">{taxCal()}</span>
            <span className="sales-total">{salesTotal()}</span> */}
          </span>
          <Link to={`/shoppingcart/checkout`}>
          <button>Proceed To CheckOut</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="itemContainer">
        <h2>Your Cart is Empty</h2>
        <button onClick={onConsole}>Console Log</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.cart.cart,
    list: state.item.items,
  };
};

export default connect(mapStateToProps, {
  updateCartItemQty,
  changeQty,
  deleteItem,
})(ShoppingCart);
