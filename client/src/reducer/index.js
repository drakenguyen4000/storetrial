// client/src/reducers/index.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import itemReducer from "./itemReducer";
// import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import msgReducer from "./msgReducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  //Where to start storing everything - start at root
  key: "root",
  storage,
  //which reducer will persist
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
  // error: errorReducer,
  auth: authReducer,
  msg: msgReducer,
});

export default persistReducer(persistConfig, rootReducer);