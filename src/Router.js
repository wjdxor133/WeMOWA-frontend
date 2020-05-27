import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from './shop/ProductList/ProductList';


class Routes extends Component{
  render(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={ProductList}/>
              </Switch>
          </Router>
      )
  }
}

export default Routes;
