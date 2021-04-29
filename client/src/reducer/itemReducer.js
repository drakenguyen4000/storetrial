import {
  GET_LIST,
  SHOW_ITEM,
  CHANGE_QTY,
  FEATURE_UPDATE,
  ORDER_HISTORY,
} from "../action/types";

const initialState = {
  items: [],
  show: null,
  orderhistory: [],
  department: null,
  category: null,
};

export default function itemReducer(state = initialState, action) {
  const { i, quantity } = action;
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        items: action.payload,
      };
    case SHOW_ITEM:
      return {
        ...state,
        show: action.payload,
      };
    case CHANGE_QTY:
      return {
        ...state,
        items: [
          ...state.items.slice(0, i),
          { ...state.items[i], quantity: (state.items[i].quantity = quantity) },
          ...state.items.slice(i + 1),
        ],
      };
    case ORDER_HISTORY:
      return {
        ...state,
        orderhistory: action.payload,
      };
    case FEATURE_UPDATE:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
