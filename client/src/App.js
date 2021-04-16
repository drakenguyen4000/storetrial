// import logo from './logo.svg';
import "./App.css";
import { useEffect } from "react";
// import axios from "axios";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ShoppingCart from "./components/ShoppingCart";
// import { HashRouter, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import history from "./components/history";
import Navbar from "./Navbar";
import CheckOut from "./components/CheckOut";
import OrderComplete from "./components/OrderComplete";
import { loadUser } from "./action/authActions";
import Login from "./components/auth/Login";
import { store } from "./store";
import Message from "./components/auth/Message";
import Home from "./components/Home";
import Footer from "./components/Footer";
import OrderHistory from "./components/OrderHistory";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    // <HashRouter history={history}>
    <Router history={history}>
      <Navbar />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <div className="main-feature-grid">
          <Message />
          <Route path="/list/:category" exact component={ItemList} />
          <Route path="/list/:category/:id" exact component={ItemDetail} />
          <Route path="/shoppingcart" exact component={ShoppingCart} />
          <Route path="/shoppingcart/checkout" exact component={CheckOut} />
          <Route path="/orderhistory/:id" exact component={OrderHistory} />
          <Route
            path="/shoppingcart/ordercomplete"
            exact
            component={OrderComplete}
          />
      </div>
      <Footer />
    </Router>
    // </HashRouter>
  );
};

export default App;
