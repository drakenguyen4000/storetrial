const initialState = {
  items: [],
  cart: [],
  selected: null,
  loading: false,
};

export default function itemReducer (state = initialState, action) {
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
        cart: [action.payload],
        loading: false,
      }
    case "SHOW_ITEM": 
      return {
        ...state, 
        show: action.payload,
        loading: false,
      };
    case "GET_ITEMS": 
      return {
        ...state,
        shoplist: action.payload,
        loading: false,
      }
    case "LOADING_ITEMS":
      return {
        ...state,
        loading: true,
      };
    default: 
    return state
  }
}
// const getItemReducer = (state = initialState, action) => {
//  if(action.type ===  "ITEMS_LOADING") {
//   return {
//     ...state,
//     loading: true,
//   }
// }}

// const selectedItemReducer = (selectItem = null, action) => {
//   if (action.type === "SELECTED_ITEM") {
//     return action.payload;
//   }
//   return selectItem;
// };

// export default combineReducers({
//   items: getItemReducer,
//   // items: itemsReducer,
//   // selectedItem: selectedItemReducer,
// });
