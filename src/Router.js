import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/reset.scss";
import Main from "./pages/Main/Main";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
//import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import CartWrapper from "./pages/ShoppingBag/CartWrapper";
import SizesDD from "./pages/ProductDetail/SizesDD";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/pdp" component={ProductDetail}></Route>
          {/* <Route exact path="/cart" component={ShoppingBag}></Route> */}
          <Route exact path="/cart" component={CartWrapper}></Route>
          <Route exact path="/test" component={SizesDD}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
