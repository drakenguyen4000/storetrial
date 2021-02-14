import axios from "axios";
import history from "../components/history";

//List Items
export const getList = () => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get("/list")
    .then((res) =>
      dispatch({
        type: "GET_LIST",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//Show Item Detail
export const showItem = (id) => (dispatch) => {
  dispatch(itemsLoading());
  axios
    .get(`/list/${id}`)
    .then((res) =>
      dispatch({
        type: "SHOW_ITEM",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//Change list quantity
export const changeQty = (i, quantity) => (dispatch) => {
  dispatch(itemsLoading());
  dispatch({
    type: "CHANGE_QTY",
    i,
    quantity,
  });
};

//Add Item to Cart
export const addToCart = (item, buynow) => (dispatch) => {
  dispatch(itemsLoading());
  dispatch({
    type: "ADD_TO_CART",
    payload: item,
  });
  return buynow === "buynow" ? history.push("/shoppingcart") : null;
};

//Update Item Quantity in Cart
export const updateCartItemQty = (i, quantity, buynow) => (dispatch) => {
  console.log(i, quantity);
  dispatch(itemsLoading());
  dispatch({
    type: "UPDATE_CART_ITEM_QTY",
    i,
    quantity,
  });
  //Navigate to shopping cart if user buys now
  return buynow === "buynow" ? history.push("/shoppingcart") : null;
};
//Delete Item from Cart
export const deleteItem = (item) => (dispatch) => {
  dispatch(itemsLoading());
  dispatch({
    type: "DELETE_ITEM",
    item,
  });
};

export const itemsLoading = () => {
  return {
    type: "LOADING_ITEMS",
  };
};
