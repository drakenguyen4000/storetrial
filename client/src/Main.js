import { Route, Switch } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut";
import OrderComplete from "./components/OrderComplete";
import OrderHistory from "./components/OrderHistory";

const Main = () => {
  return (
    <div className="main-feature-grid">
      <Switch>
        <Route path="/eapparel/shoppingcart" exact component={ShoppingCart} />
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
        <Route path="/eapparel/:category/:id" exact component={ItemDetail} />
        <Route path="/eapparel/:category" exact component={ItemList} />
      </Switch>
    </div>
  );
};

export default Main;
