import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/reset.scss";
import Main from "./pages/Main/Main";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartWrapper from "./pages/ShoppingBag/CartWrapper";
import Unique from "./pages/Unique/UniqueMain";
import OrderSumm from "./pages/ShoppingBag/OrderSumm";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/pdp" component={ProductDetail}></Route>
          <Route exact path="/cart" component={CartWrapper}></Route>
          <Route exact path="/unique" component={Unique}></Route>
          <Route exact path="/ordersumm" component={OrderSumm}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
