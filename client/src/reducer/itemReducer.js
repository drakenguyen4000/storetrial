

// const itemsReducer = () => {
//   return {
//     women: {
//       pants: {
//         pants1: {
//           description: "Sideswept Dhoti + Bottom Line Grey (Silk)",
//           price: "$49.99",
//           summary: "No matter the task, you'll never go wrong in this effortless cotton sweater from Style & Co."
//         },
//         pants2: {
//           description: "Pueraria Mirifica + Study Phyto",
//           price: "$59.99",
//         },
//         pants3: {
//           description: "Sideswept Mugi + Bottom Line Blue (Silk)",
//           price: "$39.99",
//         },
//       },
//     },
//   };
// };
const initialState = {
  items: [],
  selected: null,
  loading: false,
};

export default function itemReducer (state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "SELECTED_ITEMS": 
      return {
        ...state, 
        selected: action.payload,
        loading: false,
      };
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
