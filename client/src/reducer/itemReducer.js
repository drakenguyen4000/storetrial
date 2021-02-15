import {initialState} from "./initialState";

export default function itemReducer(state = initialState, action) {
  const { i, quantity, item } = action;
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
    case "LOADING_ITEMS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
