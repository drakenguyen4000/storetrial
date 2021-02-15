// client/src/reducers/index.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  //Where to start storing everything - start at root
  key: "root",
  storage,
  //which reducer will persist
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);