import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import persistReducer from "./reducer/index";
// import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

//variable representing initial state
const initialState = {};

const middleware = [thunk];

export const store = createStore(
  persistReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);       

export const persistor = persistStore(store);

