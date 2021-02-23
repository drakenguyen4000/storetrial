import {initialState} from "./initialState";

export default function itemReducer(state = initialState, action) {
  const { i, quantity, item, order } = action;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...(state.cart || []), action.payload],
      };
    case "UPDATE_CART_ITEM_QTY":
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, i),
          { ...state.cart[i], quantity: (state.cart[i].quantity = quantity) },
          ...state.cart.slice(i + 1),
        ],
      };
    case "DELETE_ITEM":
       const filterCart = state.cart.filter((cart) => {
          return cart._id !== item._id;
        })
      return {
        ...state,
        cart: filterCart
      };
    case "PLACE_ORDER": 
      return {
        ...state, 
        order: order,
        cart: []
      }
    case "LOADING_ITEMS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
