import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/Signup";
import ProductDetail from "./shop/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/pdp" component={ProductDetail}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
