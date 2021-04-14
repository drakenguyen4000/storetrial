import axios from "axios";
import history from "../components/history";
import { message, tokenConfig } from "./authActions";

// //List Items
export const getList = (category) => (dispatch) => {
  console.log("getList action running");
  dispatch(itemsLoading());
  axios
    .get(`/list/${category}`)
    .then((res) =>
      dispatch({
        type: "GET_LIST",
        payload: res.data,
      })
    )
    .catch(() => history.push("/"));
};

//Show Item Detail
export const showItem = (category, id) => (dispatch) => {
  // console.log(category, id)
  dispatch(itemsLoading());
  axios
    .get(`/list/${category}/${id}`)
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

export const checkOut = (token, order) => (dispatch, getState) => {
  console.log("action:", { token, order }, tokenConfig(getState));
  dispatch(itemsLoading());
  axios
    .post("/checkout", { token, order }, tokenConfig(getState))
    .then((res) => {
      if (res.data.status === "Payment success!") {
        dispatch({
          type: "CHECKOUT",
          payload: res.data,
        });
        history.push("/shoppingcart/ordercomplete");
      }
      //If Payment failed, send status
      dispatch(message(res.data.status));
    })
    .catch((err) => console.log(err));
};

export const updateFeature = (category) => (dispatch) => {
  dispatch(itemsLoading());
  dispatch({
    type: "FEATURE_UPDATE",
    payload: category,
  });
};

export const getHistory = (id) => (dispatch) => {
  console.log("action id", id)
  dispatch(itemsLoading());
  axios
    .get(`/orderhistory/${id}`)
    .then((res) =>
      dispatch({
        type: "ORDER_HISTORY",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const itemsLoading = () => {
  return {
    type: "LOADING_ITEMS",
  };
};
