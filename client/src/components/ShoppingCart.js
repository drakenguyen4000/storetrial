import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateItemQty, changeQty } from "../action";
import {Form, FormGroup, Label, Input} from "reactstrap";

const ShoppingCart = (props) => {
  const { changeQty, updateItemQty, cart, list } = props;
  const onConsole = () => {
    console.log(props);
  };

  const onChange = (e) => {
    // console.log(e.target.dataset.index)
    e.preventDefault();
    const { value } = e.target;
    const { id } = e.target.dataset;
    //Find each list item id and compare with selected cart item id.  Find the match's index.  
    const index = list.findIndex((list_item) => {
      return list_item._id === id;
    });
    console.log(index)
    changeQty(Number(index), Number(value));
  };

  const update = (item, e, i) => {
    console.log(e.target.value, "value")
    console.log(item, "item")
    console.log(i, "index")
    e.preventDefault();
    updateItemQty(i, item.quantity);
  }


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
                  <button onClick={(e) => update(item, e, i)}>Update</button>
                  {/* <button onClick={(e) => updateCart(item, e, "buynow")}>
                    Buy Now
                  </button> */}
                </Form>
          {/* <button className="shop-btn update" onClick={changeQty(item)}>
            Update
          </button> */}
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
  console.log(state.cart);
  return {
    cart: state.item.cart,
    list: state.item.list,
  };
};

export default connect(mapStateToProps, {updateItemQty, changeQty})(ShoppingCart);
