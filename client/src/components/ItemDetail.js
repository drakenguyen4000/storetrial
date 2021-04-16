import { useEffect } from "react";
import { connect } from "react-redux";
import {
  showItem,
  changeQty,
  addToCart,
  updateCartItemQty,
  updateFeature,
} from "../action";
import { useParams } from "react-router-dom";
import { Input, Form, FormGroup, Label } from "reactstrap";
import Loading from "./Loading";
import FeatureBar from "../FeatureBar";

const ItemDetail = (props) => {
  const {
    showItem,
    details,
    changeQty,
    addToCart,
    updateCartItemQty,
    cart,
    list,
    updateFeature,
  } = props;
  const { category, id } = useParams();

  useEffect(() => {
    updateFeature(category);
    showItem(category, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

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
      <>
        <div className="main">
          <div className="container">
            <button onClick={onConsole}>Console</button>
            <div className="item-wrapper item-wrapper-center">
              <img
                className="item__image-detail"
                src={`${details.image}`}
                alt={`${details.description}`}
              />
              <div className="item__description-wrapper">
                <strong className="item__brand">{details.brand}</strong>
                <p className="item__description">{details.description}</p>
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
                        id={details._id}
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
                    <button
                      className="button"
                      onClick={(e) => onBuy(details, e)}
                    >
                      Add
                    </button>
                    <button
                      className="button"
                      onClick={(e) => onBuy(details, e, "buynow")}
                    >
                      Buy Now
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureBar />
      </>
    );
  }
  return (
    <>
      <div className="main">
        <div className="container">
          <Loading />
        </div>
      </div>
      <FeatureBar />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.item.show,
    list: state.item.items,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, {
  showItem,
  changeQty,
  addToCart,
  updateCartItemQty,
  updateFeature,
})(ItemDetail);
