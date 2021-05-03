// App.js
import "./App.css";
import { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Navbar from "./Navbar";
import { loadUser } from "./action/authActions";
import Login from "./components/auth/Login";
import { store } from "./store";
import Message from "./components/auth/Message";
import Home from "./components/Home";
import Footer from "./Footer";
import Main from "./Main";

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
        <Route component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
