
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/reset.scss";
import Main from "./pages/Main/Main";
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AccList from './pages/Accessories/AccList';
import ProductList from './pages/Luggage/ProductList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/pdp" component={ProductDetail}></Route>
          <Route exact path="/productList" component={ProductList}/>
          <Route exact path="/accList" component={AccList}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
