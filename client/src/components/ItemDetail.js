import { useEffect } from "react";
import { connect } from "react-redux";
import {
  showItem,
  changeQty,
  getList,
  addToCart,
  updateCartItemQty,
} from "../action";
import { Link } from "react-router-dom";
import { Input, Form, FormGroup, Label } from "reactstrap";

const ItemDetail = (props) => {
  const {
    showItem,
    details,
    getList,
    item_id,
    changeQty,
    addToCart,
    updateCartItemQty,
    cart,
    list,
  } = props;

  useEffect(() => {
    showItem(props.item_id);
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    const { value, id } = e.target;
    const index = list.findIndex((list) => {
      return list._id === id;
    });
    
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

  const onBuy = (details, e, buynow) => {
    e.preventDefault();
    const item = list.find((list_item) => {
      return list_item._id === details._id;
    });
    return item.quantity > 0 ? logicCart(item, e, buynow) : null;
  };

  const onConsole = () => {
    // console.log(props);
    console.log(details);
    console.log(list);
    console.log(cart);
  };

  if (details) {
    return (
      <div className="container">
        <h2>Details</h2>
        <button onClick={onConsole}>Console Log</button>
        <div className="details-container">
          <img
            className="modelImage"
            src={`${details.image}`}
            alt={`${details.description}`}
            // alt="model"
          />
          <div className="detail">
            <div>{details.brand}</div>
            <p className="description">{details.description}</p>
            <strong>${details.price}</strong>
            <div>
              <Form>
                <FormGroup>
                  <Label>Qty: </Label>
                  <Input
                    type="select"
                    name="quantity"
                    className="quantity_input"
                    onChange={onChange}
                    //Can't use index --- need to switch to id
                    // data-index={i}
                    id={details._id}
                    // data-id={details._id}
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
                <button onClick={(e) => onBuy(details, e)}>Add to Cart</button>
                <button onClick={(e) => onBuy(details, e, "buynow")}>
                  Buy Now
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="container"></div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    details: state.item.show,
    item_id: ownProps.match.params.id,
    list: state.item.items,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, {
  showItem,
  changeQty,
  getList,
  addToCart,
  updateCartItemQty,
})(ItemDetail);
