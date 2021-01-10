// import logo from './logo.svg';
import "../App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import { HashRouter, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <HashRouter history={history}>
      <div className="App">
        {/* <ItemList /> */}
        {/* <ItemDetail /> */}
        <Route path="/list" exact component={ItemList} />
        <Route path="/list/:id" exact component={ItemDetail} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </HashRouter>
  );
};

export default App;
