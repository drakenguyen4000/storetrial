const initialState = {
  items: [],
  cart: [],
  shoplist: [],
  selected: null,
  loading: false,
};

export default function itemReducer (state = initialState, action) {
  // const {cart} = state;
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "ADD_ITEM":
      // console.log(action.payload)
      return {
        ...state, 
        //If state.cart exist or empty, add payload to state.cart array
        cart: [ ...(state.cart || []), action.payload], 
        loading: false,
      }
    case "SHOW_ITEM": 
      return {
        ...state, 
        show: action.payload,
        loading: false,
      };
    // case "GET_ITEMS": 
    // // console.log(action.payload, "get_items reducer")
    //   return {
    //     ...state,
    //     shoplist: action.payload,
    //     loading: false,
    //   }
    case "LOADING_ITEMS":
      return {
        ...state,
        loading: true,
      };
    default: 
    return state
  }
}