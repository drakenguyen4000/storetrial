// App.js
import "./App.css";
import { useEffect } from "react";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ShoppingCart from "./components/ShoppingCart";
import { Router, Route, Switch } from "react-router-dom";
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
    <Router history={history}>
      <Navbar />
      <Message />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/eapparel" exact component={Home} />
        <Route path="/eapparel/login" exact component={Login} />
        <div className="main-feature-grid">
          <Switch>
            <Route
              path="/eapparel/shoppingcart"
              exact
              component={ShoppingCart}
            />
            <Route
              path="/eapparel/shoppingcart/checkout"
              exact
              component={CheckOut}
            />
            <Route
              path="/eapparel/shoppingcart/ordercomplete"
              exact
              component={OrderComplete}
            />
            <Route
              path="/eapparel/orderhistory/:id"
              exact
              component={OrderHistory}
            />
            <Route path="/eapparel/:category" exact component={ItemList} />
            <Route
              path="/eapparel/:category/:id"
              exact
              component={ItemDetail}
            />
          </Switch>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
