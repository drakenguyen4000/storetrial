import {
  GET_LIST,
  SHOW_ITEM,
  CHANGE_QTY,
  LOADING_ITEMS,
  FEATURE_UPDATE,
} from "../action/types";
// import {initialState} from "./initialState";

const initialState = {
  items: [],
  show: null,
  loading: false,
  department: null,
  category: null
  // shoplist: [],
  // order: {},
};

export default function itemReducer(state = initialState, action) {
  const { i, quantity } = action;
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case SHOW_ITEM:
      return {
        ...state,
        show: action.payload,
        loading: false,
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
    case FEATURE_UPDATE: 
      return {
        ...state,
        category: action.payload,
        loading: false,
      };  
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
