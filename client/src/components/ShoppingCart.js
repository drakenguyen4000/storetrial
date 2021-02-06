import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeQty } from "../action";

const ShoppingCart = (props) => {
  const onConsole = () => {
    console.log(props.cart);
  };

  const shoppingList = (props) => {
    return props.cart.map((item) => (
      <div className="item-container shopContainer" key={item._id}>
        <Link className="image-link" to={`/list/${item._id}`}>
          <img
            className="model"
            src={`${item.image}`}
            alt={`${item.description}`}
            alt="model"
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
          <span>Qty: </span>
          <span>{item.quantity}</span>
          <button className="shop-btn update" onClick={changeQty(item)}>
            Update
          </button>
        </div>
      </div>
    ));
  };
  if (props.cart) {
    return (
      <div className="container">
        <h2>Shopping Cart</h2>
        <button onClick={onConsole}>Console Log</button>
        {shoppingList(props)}
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
    cart: state.cart,
    list: state.list,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
