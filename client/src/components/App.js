// import logo from './logo.svg';
import "../App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import ShoppingCart from "./ShoppingCart";
import { HashRouter, Route } from "react-router-dom";
import history from "./history";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const App = () => {
  return (
    <HashRouter history={history}>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main">
          <Route path="/" exact component={ItemList} />
          <Route path="/list" exact component={ItemList} />
          <Route path="/list/:id" exact component={ItemDetail} />
          <Route path="/shoppingcart" exact component={ShoppingCart} />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
