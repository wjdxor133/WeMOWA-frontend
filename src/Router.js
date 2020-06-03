import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccList from "./pages/Accessories/AccList";
import ProductList from "./pages/Luggage/ProductList";
import Main from "./pages/Main/Main";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import CartWrapper from "./pages/ShoppingBag/CartWrapper";
import SizesDD from "./pages/ProductDetail/SizesDD";
import StoreLocator from "./pages/StoreLocator/StoreLocator";
import CheckOut from "./shop/CheckOut/CheckOut";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/pdp" component={ProductDetail}></Route>
          <Route exact path="/cart" component={CartWrapper}></Route>
          <Route exact path="/test" component={SizesDD}></Route>
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/accList" component={AccList} />
          <Route exact path="/locator" component={StoreLocator} />
          <Route exact path="/CheckOut" component={CheckOut}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
