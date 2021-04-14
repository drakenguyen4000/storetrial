import {
  ADD_TO_CART,
  DELETE_ITEM,
  LOADING_ITEMS,
  CHECKOUT,
  UPDATE_CART_ITEM_QTY,
} from "../action/types";

const initialState = {
  cart: [],
  history: [],
  loading: false,
};

export default function cartReducer(state = initialState, action) {
  const { i, quantity, item } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...(state.cart || []), action.payload],
      };
    case UPDATE_CART_ITEM_QTY:
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, i),
          { ...state.cart[i], quantity: (state.cart[i].quantity = quantity) },
          ...state.cart.slice(i + 1),
        ],
      };
    case DELETE_ITEM:
       const filterCart = state.cart.filter((cart) => {
          return cart._id !== item._id;
        })
      return {
        ...state,
        cart: filterCart
      };
    case CHECKOUT:
      return {
        ...state, 
        // msg: action.payload.status, //Message needs it's own reducer
        cart:[],
      }
    case "ORDER_HISTORY":
      return {
        ...state,
        history: action.payload
      }
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
