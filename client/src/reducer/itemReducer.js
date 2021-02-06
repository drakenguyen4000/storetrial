const initialState = {
  items: [],
  cart: [],
  shoplist: [],
  show: null,
  selected: null,
  loading: false,
};

export default function itemReducer(state = initialState, action) {
  const { i, quantity } = action;
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "SHOW_ITEM":
      return {
        ...state,
        show: action.payload,
        loading: false,
      };
    case "CHANGE_QTY":
      return {
        ...state,
        items: [
          ...state.items.slice(0, i),
          { ...state.items[i], quantity: (state.items[i].quantity = quantity) },
          ...state.items.slice(i + 1),
        ],
      };
    case "ADD_TO_CART":
      // console.log(action.payload, "addtocart reducer")
      return {
        ...state,
        cart: [...(state.cart || []), action.payload],
      };
    case "UPDATE_ITEM_QTY":
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, i),
          { ...state.cart[i], quantity: (state.cart[i].quantity = quantity) },
          ...state.cart.slice(i + 1),
        ],
      };
    case "LOADING_ITEMS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
